import * as Yup from "yup";

interface IInitialFieldsForm {
  id: string;
  name: string;
  type: string;
}

export interface IValidationSchema {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IAuthorizationProps {
  validSchema: Yup.SchemaOf<
    IValidationSchema | Pick<IValidationSchema, "email" | "password">
  >;
  initialFieldsForm: IInitialFieldsForm[];
  pageLogin: boolean;
}
