import { Chars } from "./types/jfmTable";

export enum CharacterType {
  /** 汉字 */
  IDEOGRAPH = 0,
  /** 逗号、顿号 */
  COMMA,
  /** 句号 */
  PERIOD,
  /** 冒号、分号 */
  COLON,
  /** 开括号 */
  OPEN_PAREN,
  /** 闭括号 */
  CLOSE_PAREN,
  /** 开引号 */
  OPEN_QUOTE,
  /** 闭引号 */
  CLOSE_QUOTE,
  /** 中点 */
  MIDDLE_DOT,
  /** 问号 */
  QUESTION_MARK,
  /** 感叹号 */
  EXCLAMATION_MARK,
  /** 复合问号/感叹号 */
  COMPOSED_MARK,
  /** 连接号 */
  DASH,
  /** 二字破折号 */
  TWO_EM_DASH,
  /** 三字破折号 */
  THREE_EM_DASH,
  /** 假想字符 */
  BOX,
}

export const CharacterList: Record<CharacterType, Chars> = {
  [CharacterType.IDEOGRAPH]: [],
  [CharacterType.COMMA]: ["、", "，"],
  [CharacterType.PERIOD]: ["。", "．"],
  [CharacterType.COLON]: ["：", "；"],
  [CharacterType.OPEN_PAREN]: [
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
  ],
  [CharacterType.CLOSE_PAREN]: [
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
  ],
  [CharacterType.OPEN_QUOTE]: ["‘", "“"],
  [CharacterType.CLOSE_QUOTE]: ["’", "”"],
  [CharacterType.MIDDLE_DOT]: ["・", "·"],
  [CharacterType.QUESTION_MARK]: ["？"],
  [CharacterType.EXCLAMATION_MARK]: ["！"],
  [CharacterType.COMPOSED_MARK]: ["‼", "⁇", "⁈", "⁉"],
  [CharacterType.DASH]: [
    "—", // U+2014
    "―", // U+2015
    "‥",
    "…",
    "〜", // U+301C
    "～", // U+FF5E
  ],
  [CharacterType.TWO_EM_DASH]: ["⸺"],
  [CharacterType.THREE_EM_DASH]: ["⸻"],
  [CharacterType.BOX]: [
    "boxbdd",
    "parbdd",
    "jcharbdd",
    "alchar",
    "nox alchar",
    "glue",
    -1,
  ],
};
