import { API } from "api";
import { GetServerSideProps, NextPage } from "next";

import Layout from "components/Layout";
import Profile from "components/Profile";

import { IFavoritesUser, IUser } from "components/Profile/types";
import { IProfilePageProps } from "types/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await API.get<IUser>(`users/${context?.params?.id}`);

  const favoriteUser = await API.get<IFavoritesUser>(
    `favoritesUser/${context?.params?.id}`
  );

  if (!user?.id) {
    return {
      notFound: true,
    };
  }

  return { props: { user, favoriteUser } };
};

const ProfilePage: NextPage<IProfilePageProps> = ({ user, favoriteUser }) => (
  <Layout title={user.name}>
    <Profile user={user} favoritesUser={favoriteUser} />
  </Layout>
);

export default ProfilePage;
