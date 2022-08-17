export interface IFavoriteListProps {
  list: { id: number; name: string }[] | [];
  title: string;
  pathToList: string;
  pathToItem: string;
}
