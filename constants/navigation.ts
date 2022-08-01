import { routesUrls } from "./routes";

const { CHARACTERS, LOCATIONS, SEASONS } = routesUrls;

export const navigation = [
  // { id: 11, title: "Home", path: "/" },
  { id: 1, title: "Characters", path: CHARACTERS },
  { id: 2, title: "Locations", path: LOCATIONS },
  { id: 3, title: "Seasons", path: SEASONS },
];
