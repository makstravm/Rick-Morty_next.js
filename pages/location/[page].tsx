import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Layout from "components/Layout";
import Location from "components/main/Location";

import { gql } from "api";

import { ILocationPageProps } from "types/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: {
      locations: {
        info: { count },
      },
    },
  } = await gql(
    `query {
      locations {
        info {
          count
        }
      }
    }`,
    {}
  );

  let paths: { params: { page: string } }[] = [];

  for (let i = 1; i <= count; i++) {
    paths = [...paths, { params: { page: i.toString() } }];
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    data: { location },
  } = await gql(
    `query($id: ID!) {
      location(id: $id) {
        id
        name
        created
        type
        dimension
        residents {
          id
          name
          image
        }
      }
    }`,
    { id: context.params?.page }
  );

  if (!location) {
    return {
      notFound: true,
    };
  }

  return {
    props: { location: location },
  };
};

const LocationPage: NextPage<ILocationPageProps> = ({ location }) => (
  <Layout title={location.name}>
    <Location locationOne={location} />
  </Layout>
);

export default LocationPage;
