import { useState } from "react";

import { API } from "api";

import { Authorization } from "components/Authorization";
import { registrationFormFields } from "constants/form/registrationFormsFields";

import { registerValidationSchema } from "helpers/schema/registerSchame";

const RegistrationPage = () => {
  const [resError, setResError] = useState<string>("");

  const submitForm = async (dataForm: Record<string, string>) => {
    try {
      const data = await API.post("register", dataForm);

      if (data) {
        setResError("");
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
