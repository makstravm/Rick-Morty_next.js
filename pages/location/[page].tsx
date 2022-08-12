import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Layout from "components/Layout";

import { gql } from "helpers/gql";
import { ILocationPageProps } from "types/types";
import Location from "components/main/Location";

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
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await gql(
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
        }
      }
    }`,
    { id: context.params?.page }
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { location: data.location },
  };
};

const LocationPage: NextPage<ILocationPageProps> = ({ location }) => (
  <Layout title={location.name}>
    <Location locationOne={location} />
  </Layout>
);

export default LocationPage;
