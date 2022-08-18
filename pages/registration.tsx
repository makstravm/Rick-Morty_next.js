import { useState } from "react";
import { useRouter } from "next/router";

import { API } from "api";

import { Authorization } from "components/Authorization";
import { registrationFormFields } from "constants/form/registrationFormsFields";

import { registerValidationSchema } from "helpers/schema/registerSchame";
import { routesUrls } from "constants/routes";
import { IUser } from "components/Profile/types";

const RegistrationPage = () => {
  const [resError, setResError] = useState<string>("");

  const router = useRouter();

  const submitForm = async (dataForm: Record<string, string>) => {
    try {
      const data = await API.post("register", {
        ...dataForm,
        favorites: {
          characters: [],
          episodes: [],
        },
      });

      if (data) {
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
