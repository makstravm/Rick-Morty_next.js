import { ICharacter } from "../Character/types";

export interface ICharactersListProps {
  characters: Pick<ICharacter, "id" | "name" | "image">[];
}
