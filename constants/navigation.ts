import { routesUrls } from './routes';

const { CHARACTER, LOCATION, EPISODE } = routesUrls;

export const navigation = [
  { id: 11, title: 'Home', path: '/' },
  { id: 1, title: 'Character', path: CHARACTER },

  { id: 2, title: 'Location', path: LOCATION },
  { id: 3, title: 'episode', path: EPISODE },
];
