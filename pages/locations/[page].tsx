import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

import { routesUrls } from "constants/routes";

import Layout from "components/Layout";
import Pagination from "components/Pagination";
import Preloader from "components/Preloader";
import LocationsList from "components/LocationsList";

import { gql } from "helpers/gql";

import { ILocationsPageProps } from "types/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: {
      locations: {
        info: { pages },
      },
    },
  } = await gql(
    `query {
      locations {
        info {
          pages
        }
      }
    }`,
    {}
  );

  let paths: { params: { page: string } }[] = [];

  for (let i = 1; i <= pages; i++) {
    paths = [...paths, { params: { page: i.toString() } }];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await gql(
    `query($page: Int) {
      locations(page: $page) {
        info {
          pages
          next
          prev
        }
        results {
          id
          name
        }
      }
    }`,
    { page: Number(context.params?.page) }
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: data.locations,
  };
};

const LocationsPage: NextPage<ILocationsPageProps> = ({ results, info }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Preloader />;
  }

  return (
    <Layout title="Locations">
      <LocationsList locations={results} />
      <Pagination info={info} path={routesUrls.LOCATIONS} />
    </Layout>
  );
};

export default LocationsPage;
