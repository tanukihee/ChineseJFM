import { CharacterType } from "../CharacterType";
import { JfmFeatures } from "../types/jfmFeature";
import { CharClass, JfmTable } from "../types/jfmTable";

export const createJfmTable = (
  name: "cn" | "tw" | "jp",
  features: JfmFeatures
) => {
  const createBaseCharClass = (
    width: number,
    chars?: Array<string | -1>,
    optional?: Pick<CharClass, "left" | "down" | "align">
  ) =>
    features.vert
      ? { height: 0.88, depth: 0.12, italic: 0, width, chars, ...optional }
      : { height: 0.5, depth: 0.5, italic: 0, width, chars, ...optional };

  const jfm: JfmTable = {
    version: 3,
    dir: features.vert ? "tate" : "yoko",
    zw: 1,
    zh: 1,
    kanjiskip: [0, 0.25, 0],
    xkanjiskip: [0.25, 0.25, 0.125],
    [CharacterType.IDEOGRAPH]: createBaseCharClass(1),
    [CharacterType.COMMA]: createBaseCharClass(0.5, ["、", "，"]),
    [CharacterType.PERIOD]: createBaseCharClass(0.5, ["。", "．"]),
    [CharacterType.COLON]: createBaseCharClass(1, ["：", "；"]),
    [CharacterType.OPEN_PAREN]: createBaseCharClass(0.5, [
      "〈",
      "《",
      "「",
      "『",
      "【",
      "〔",
      "〖",
      "〘",
      "〝",
      "（",
      "［",
      "｛",
      "｟",
    ]),
    [CharacterType.CLOSE_PAREN]: createBaseCharClass(0.5, [
      "〉",
      "》",
      "」",
      "』",
      "】",
      "〕",
      "〗",
      "〙",
      "〞",
      "〟",
      "）",
      "］",
      "｝",
      "｠",
    ]),
    [CharacterType.OPEN_QUOTE]: createBaseCharClass(0.5, ["‘", "“"]),
    [CharacterType.CLOSE_QUOTE]: createBaseCharClass(0.5, ["’", "”"]),
    [CharacterType.MIDDLE_DOT]: createBaseCharClass(0.5, ["・", "·"]),
    [CharacterType.QUESTION_MARK]: createBaseCharClass(0.5, ["？"]),
    // TODO: width setting for `！'
    [CharacterType.EXCLAMATION_MARK]: createBaseCharClass(0.5, ["！"]),
    [CharacterType.COMPOSED_MARK]: createBaseCharClass(1, ["‼", "⁇", "⁈", "⁉"]),
    [CharacterType.DASH]: createBaseCharClass(1, [
      "—", // U+2014
      "―", // U+2015
      "‥",
      "…",
      "〜", // U+301C
      "～", // U+FF5E
    ]),
    [CharacterType.TWO_EM_DASH]: createBaseCharClass(2, ["⸺"]),
    [CharacterType.THREE_EM_DASH]: createBaseCharClass(3, ["⸻"]),
    [CharacterType.BOX]: {
      chars: [
        "boxbdd",
        "parbdd",
        "jcharbdd",
        "alchar",
        "nox alchar",
        "glue",
        -1,
      ],
    },
  };

  return jfm;
};
