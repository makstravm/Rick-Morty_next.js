export const jwtDecode = (token: string) => {
  let arrToken = token.split(".");

  let base64Token = atob(arrToken[1]);

  return JSON.parse(base64Token);
};
