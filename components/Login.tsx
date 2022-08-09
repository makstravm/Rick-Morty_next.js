import Head from "next/head";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "helpers/schema/loginSchema";
import { useForm } from "react-hook-form";

interface MyForm {
  email: string;
  password: string;
}

export const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyForm>({
    mode: "onChange",
    resolver: yupResolver(loginValidationSchema),
  });

  const submitForm = (data: MyForm) => {
    return data;
  };

  return (
    <>
      <Head>
        <title>{`Log In | Rick & Morty`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content={`Rick, Morty, Rick and Morty, movies`} />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <style data-href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" />
      </Head>
      <div className="login">
        <form onSubmit={handleSubmit(submitForm)}>
          <input {...register("email")} name="email" />
          <input {...register("password")} name="password" type="password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};
