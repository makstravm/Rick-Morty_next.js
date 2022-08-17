export const jwtDecode = (token: string) => {
  const arrToken = token.split(".");

  const base64Token = atob(arrToken[1]);

  return JSON.parse(base64Token);
};
