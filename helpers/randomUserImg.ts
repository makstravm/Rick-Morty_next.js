export const randomLinkUserImage = () => {
  const arrayNamesImages = ["cat", "dog", "fox", "panda"];

  const index = Math.floor(Math.random() * arrayNamesImages.length);

  return `/userImg/${arrayNamesImages[index]}.png`;
};
