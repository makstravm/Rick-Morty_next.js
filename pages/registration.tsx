import { Authorization } from "components/Authorization";
import { registrationFormFields } from "constants/form/registrationFormsFields";

const RegistrationPage = () => {
  return <Authorization title="Sign Up" fieldsForm={registrationFormFields} />;
};

export default RegistrationPage;
