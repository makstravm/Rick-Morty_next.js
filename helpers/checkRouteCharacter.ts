import { routesUrls } from "constants/routes";

const { CHARACTER_MAIN, CHARACTER_SUPPORTING } = routesUrls;

export const checkRouteCharacter = (id: number): string =>
  id <= 5 ? CHARACTER_MAIN : CHARACTER_SUPPORTING;
