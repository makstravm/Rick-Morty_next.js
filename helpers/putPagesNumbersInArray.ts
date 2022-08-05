export const putPagesNumbersInArray = (
  activePage: number,
  allPages: number
): string[] => {
  let arrayPagesNumber: string[] = [];

  for (let index = 1; index <= allPages; index++) {
    if (arrayPagesNumber.length < 4 && activePage <= 3) {
      arrayPagesNumber.push(index.toString());
    } else if (!arrayPagesNumber.length) {
      arrayPagesNumber.push(String(1));
    } else if (index + 3 > activePage && activePage > index - 3) {
      arrayPagesNumber.push(index.toString());
    } else if (index + 1 > allPages) {
      arrayPagesNumber.push(index.toString());
    } else if (arrayPagesNumber[arrayPagesNumber.length - 1] !== "...") {
      arrayPagesNumber[arrayPagesNumber.length] = "...";
    }
  }

  return arrayPagesNumber;
};
