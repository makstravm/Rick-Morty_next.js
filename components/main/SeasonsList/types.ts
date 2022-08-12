export interface IResponseSeasonsData {
  id: number;
  image: string;
  season: string;
}

export interface ISeasonsProps {
  seasons: IResponseSeasonsData[];
}
