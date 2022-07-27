import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "components/Layout";
import CharactersList from "components/CharactersList";
import Pagination from "components/Pagination";
import { routesUrls } from "constants/routes";
import { ICharacter, IResponse, IAllInfo } from "types/types";
import Preloader from "components/Preloader";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.BASE_URL}/character`);

  const {
    info: { pages },
  }: { info: IAllInfo } = await response.json();

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
  const response = await fetch(
    `${process.env.BASE_URL}/character/?page=${context.params?.page}`
  );

  const data = await response.json();

  if (!data?.results) {
    return {
      notFound: true,
    };
  }

  return {
    props: data,
  };
};

const Characters: NextPage<IResponse<ICharacter>> = ({ results, info }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Preloader />;
  }

  return (
    <Layout title="Characters">
      <CharactersList characters={results} />
      <Pagination info={info} path={routesUrls.CHARACTERS} />
    </Layout>
  );
};

export default Characters;
