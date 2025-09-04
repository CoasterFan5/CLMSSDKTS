export const enumToStringList = (e: string[]) => {
  const newItems = e.map((i) => `'${i}'`);
  return `(${newItems.join("|")})[]`;
};
