/*
response type formats differ, this system is responsible for handling those
*/

export const buildResponseType = (
  typeName: string,
  ref: string | undefined,
) => {
  switch (typeName) {
    case "array":
      return {
        import: `import type {${ref}} from "../models/${ref}"`,
        typeString: `${ref}[]`,
      };
    case "boolean":
      return {
        import: ``,
        typeString: `boolean`,
      };
    case "void":
      return {
        import: ``,
        typeString: `void`,
      };
    default:
      return {
        import: `import type {${typeName}} from "../models/${typeName}"`,
        typeString: `${typeName}`,
      };
  }
};
