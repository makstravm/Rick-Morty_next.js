import { Authorization } from "components/Authorization";
import { registrationFormFields } from "constants/form/registrationFormsFields";
import { registerValidationSchema } from "helpers/schema/registerSchame";

const RegistrationPage = () => {
  return (
    <Authorization
      validSchema={registerValidationSchema}
      initialFieldsForm={registrationFormFields}
      pageLogin={false}
    />
  );
};

export default RegistrationPage;
