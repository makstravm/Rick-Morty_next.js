import { useState } from "react";
import Head from "next/head";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { loginValidationSchema } from "helpers/schema/loginSchema";

import style from "../styles/Login.module.scss";

interface MyForm {
  email: string;
  password: string;
}

export const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<MyForm>({
    mode: "all",
    defaultValues: {},
    resolver: yupResolver(loginValidationSchema),
  });

  const router = useRouter();

  const [resError, setResError] = useState<string | undefined>("");

  const submitForm = (data: MyForm) =>
    signIn("credentials", { ...data, redirect: false }).then((res) => {
      if (res?.ok) {
        router.back();
      } else {
        setResError(res?.error);
      }
    });

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
      <div className={style.login}>
        <div className={style.main}>
          <form
            onSubmit={handleSubmit(submitForm)}
            className={resError && style.formError}
          >
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            {resError && <div className={style.resError}>{resError}</div>}
            <div
              className={
                (errors.email && touchedFields.email && style.errors) || ""
              }
            >
              <input {...register("email")} name="email" placeholder="email" />
              {errors.email && touchedFields.email && (
                <span>{errors.email.message}</span>
              )}
            </div>
            <div
              className={
                (errors.password && touchedFields.password && style.errors) ||
                ""
              }
            >
              <input
                {...register("password")}
                name="password"
                type="password"
                placeholder="password"
              />
              {errors.password && touchedFields.password && (
                <span>{errors.password?.message}</span>
              )}
            </div>
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
};
