export const snakeToCamelCase = (snakeCaseString: string) => {
  return snakeCaseString
    .split("_")
    .map((i, index) => {
      if (index != 0) {
        return i.substring(0, 1).toUpperCase() + i.substring(1);
      }
      return i;
    })
    .join("");
};
