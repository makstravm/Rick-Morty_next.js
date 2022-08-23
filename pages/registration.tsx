import { useState } from "react";
import { useRouter } from "next/router";

import { API } from "api";

import { Authorization } from "components/Authorization";
import { registrationFormFields } from "constants/form/registrationFormsFields";

import { registerValidationSchema } from "helpers/schema/registerSchame";
import { routesUrls } from "constants/routes";
import { IFavoritesUser, IResponseUser, IUser } from "components/Profile/types";

const RegistrationPage = () => {
  const [resError, setResError] = useState<string>("");

  const router = useRouter();

  const submitForm = async (dataForm: Record<string, string>) => {
    try {
      const dataUser = await API.post<Record<string, string>, IResponseUser>(
        "register",
        {
          ...dataForm,
        }
      );

      const dataFavorites = await API.post<
        Omit<IFavoritesUser, "id">,
        IFavoritesUser
      >("favoritesUser", {
        favorites: {
          characters: [],
          episodes: [],
        },
      });

      if (dataUser && dataFavorites) {
        router.push(routesUrls.LOGIN);
      }
    } catch (e) {
      setResError(e as string);
    }
  };

  return (
    <Authorization
      validSchema={registerValidationSchema}
      initialFieldsForm={registrationFormFields}
      pageLogin={false}
      handleSubmitForm={submitForm}
      error={resError}
    />
  );
};

export default RegistrationPage;
