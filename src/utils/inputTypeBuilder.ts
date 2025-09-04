import { operationParams } from "../swaggerLikeFormat";
import { typesMap } from "../typesMap";
import { enumToStringList } from "./enumToStringList";

type TypeDetails = (typeof operationParams._type)[number];

export class InputTypeBuilder {
  private typeObject: Record<
    string,
    {
      value: string;
      required: boolean;
      location: string;
    }
  > = {};

  constructor(args: TypeDetails[]) {
    args.forEach((item) => {
      this.addType(item);
    });
  }

  addType = (typeDetails: TypeDetails) => {
    switch (typeDetails.type) {
      case "array": {
        this.typeObject[`${typeDetails.name}[]`] = {
          value: typeDetails.enum
            ? enumToStringList(typeDetails.enum)
            : "string[]",
          required: typeDetails.required,
          location: typeDetails.paramType,
        };
        break;
      }
      default:
        this.typeObject[typeDetails.name] = {
          value: typesMap[typeDetails.type],
          required: typeDetails.required,
          location: typeDetails.paramType,
        };
        break;
    }
    if (typeDetails.type == "array") {
    } else {
    }
  };

  toString = () => {
    let s = "";
    for (const key in this.typeObject) {
      const item = this.typeObject[key];
      const keyString = `"${key}"${item.required ? "" : "?"}`;
      s += `${keyString}: ${item.value},\n`;
    }
    return `{${s}}`;
  };

  getLocationMapString = (): string => {
    let s = "";
    for (const key in this.typeObject) {
      s += `"${key}": "${this.typeObject[key].location}",`;
    }
    return `{${s}}`;
  };
}
