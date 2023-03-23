import { CharacterType } from "../CharacterType";
import { JfmTable } from "../types/jfm";

export const createJfmTable = () => {
  const jfm: JfmTable = {
    version: 3,
    dir: "yoko",
    zw: 1,
    zh: 1,
    kanjiskip: [0, 0.25, 0],
    xkanjiskip: [0.25, 0.25, 0.125],
    [CharacterType.IDEOGRAPH]: {
      width: 1,
      height: 0.88,
      depth: 0.12,
      italic: 0,
    },
  };

  return jfm;
};
