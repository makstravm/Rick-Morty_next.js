import { IEpisodeData } from "../Episode/types";

export interface IEpisodesListProps {
  episodes: Pick<IEpisodeData, "id" | "name" | "episode">[];
}
