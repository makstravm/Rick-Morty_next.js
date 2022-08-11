import { Authorization } from "components/Authorization";
import { loginFormFields } from "constants/form/loginFormsFields";
import { loginValidationSchema } from "helpers/schema/loginSchema";

const LogInPage = () => {
  return (
    <Authorization
      validSchema={loginValidationSchema}
      initialFieldsForm={loginFormFields}
      pageLogin={true}
    />
  );
};

export default LogInPage;
