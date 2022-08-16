import { API } from "api";
import { GetServerSideProps, NextPage } from "next";

import Layout from "components/Layout";
import Profile from "components/Profile";

import { IUser } from "components/Profile/types";
import { IProfilePageProps } from "types/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await API.get<IUser>(`users/${context?.params?.id}`);

  if (!user?.id) {
    return {
      notFound: true,
    };
  }

  return { props: { user } };
};

const ProfilePage: NextPage<IProfilePageProps> = ({ user }) => (
  <Layout title={user.name}>
    <Profile user={user} />
  </Layout>
);

export default ProfilePage;
