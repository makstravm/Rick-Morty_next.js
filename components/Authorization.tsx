import { useState, FC } from "react";
import Head from "next/head";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import style from "../styles/Authorization.module.scss";
import Link from "next/link";
import { routesUrls } from "constants/routes";
import { IAuthorizationProps } from "types/types";

const { LOGIN, REGISTRATION } = routesUrls;

export const Authorization: FC<IAuthorizationProps> = ({
  validSchema,
  pageLogin,
  initialFieldsForm,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<Record<string, string>>({
    mode: "all",
    defaultValues: {},
    resolver: yupResolver(validSchema),
  });

  const router = useRouter();

  const [resError, setResError] = useState<string | undefined>("");

  const submitForm = (data: any) => {
    if (pageLogin) {
      signIn("credentials", { ...data, redirect: false }).then((res) => {
        if (res?.ok) {
          router.back();
        } else {
          setResError(res?.error);
        }
      });
    } else {
      return data;
    }
  };

  const checkTitleText = (isLogin: boolean) =>
    isLogin ? "Sign In" : "Sign Up";

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
          <div className={style.linkBox}>
            <Link href={!pageLogin ? LOGIN : REGISTRATION}>
              <a>{checkTitleText(!pageLogin)}</a>
            </Link>
          </div>

          <form
            onSubmit={handleSubmit(submitForm)}
            className={resError && style.formError}
          >
            <h2>{checkTitleText(pageLogin)}</h2>
            {resError && <div className={style.resError}>{resError}</div>}
            {initialFieldsForm?.map(({ id, name, type }) => (
              <div
                className={
                  (errors[name] && touchedFields[name] && style.errors) || ""
                }
                key={id}
              >
                <input
                  {...register(name)}
                  name={name}
                  placeholder={name}
                  type={type}
                />
                {errors[name]?.message && touchedFields[name] && (
                  <span>{errors[name]?.message}</span>
                )}
              </div>
            ))}
            <button type="submit">{checkTitleText(pageLogin)}</button>
          </form>
        </div>
      </div>
    </>
  );
};
