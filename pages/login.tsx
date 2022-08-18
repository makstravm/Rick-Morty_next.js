import { useState } from "react";

import { signIn } from "next-auth/react";

import { Authorization } from "components/Authorization";
import { loginFormFields } from "constants/form/loginFormsFields";

import { loginValidationSchema } from "helpers/schema/loginSchema";
import { useRouter } from "next/router";
import { routesUrls } from "constants/routes";

const LogInPage = () => {
  const router = useRouter();

  const [resError, setResError] = useState<string>("");

  const submitForm = (data: Record<string, string>) =>
    signIn("credentials", { ...data, redirect: false }).then((res) => {
      if (res?.ok) {
        router.push(routesUrls.HOME);
      } else {
        setResError(res?.error as string);
      }
    });

  return (
    <Authorization
      validSchema={loginValidationSchema}
      initialFieldsForm={loginFormFields}
      pageLogin={true}
      handleSubmitForm={submitForm}
      error={resError}
    />
  );
};

export default LogInPage;
