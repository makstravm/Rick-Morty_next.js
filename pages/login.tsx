import { Authorization } from "components/Authorization";
import { loginFormFields } from "constants/form/loginFormsFields";

const LogInPage = () => {
  return <Authorization title="Sign In" fieldsForm={loginFormFields} />;
};

export default LogInPage;
