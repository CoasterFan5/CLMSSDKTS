export const getValidReturnType = (returnType: string) => {
  return returnType.replaceAll(/[^a-zA-Z]/g, "");
};
