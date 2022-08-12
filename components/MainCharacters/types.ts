import { ICharacter } from "components/main/Character/types";

export interface IMainCharactersProps {
  characters: Pick<ICharacter, "id" | "name" | "image">[];
}
