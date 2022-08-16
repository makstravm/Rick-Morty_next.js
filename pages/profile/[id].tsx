import { API } from "api";
import { GetServerSideProps, NextPage } from "next";
import Layout from "components/Layout";
import { IProfilePage, IUser } from "types/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await API.get<IUser>(`users/${context?.params?.id}`);

  if (!user?.id) {
    return {
      notFound: true,
    };
  }

  return { props: { user } };
};

const ProfilePage: NextPage<IProfilePage> = ({ user }) => (
  <Layout title={user.name}>
    <div>Profile</div>
  </Layout>
);

export default ProfilePage;
