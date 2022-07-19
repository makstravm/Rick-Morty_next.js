export interface IResponse<T> {
  info: {
    count: number | null;
    pages: number;
    next: string;
    prev: number | null;
  };
  results: T[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
  episode: string[];
  url: string;
}
