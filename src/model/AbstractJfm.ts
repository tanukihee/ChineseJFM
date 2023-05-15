import { CharacterList, CharacterType } from "../asset/Characters";
import { BaseJfmFeature, Locale } from "../types/jfmFeature";
import { CharClass, Glue, JfmTable } from "../types/jfmTable";
import { createGlue } from "../util/jfmUtils";

export abstract class AbstractJfm implements JfmTable {
  constructor(locale: Locale, feature: BaseJfmFeature) {
    luatexbase.module_info(
      "chinese-jfm",
      `JFM ${locale} loaded, features\n${Object.keys(feature)
        .map((k) => `"${k}" = ${feature[k as keyof BaseJfmFeature]}`)
        .join("\n")}\ndetected.`
    );

    this.dir = feature.isVert ? "tate" : "yoko";

    const createCharClass = (
      type: CharacterType,
      optional?: CharClass
    ): CharClass =>
      type === CharacterType.BOX
        ? { chars: CharacterList[type] }
        : {
            chars: CharacterList[type],
            width: 1,
            height: feature.isVert ? 0.5 : 0.88,
            depth: feature.isVert ? 0.5 : 0.12,
            italic: 0,
            align: "left",
            left: 0,
            down: 0,
            ...optional,
          };

    this[CharacterType.IDEOGRAPH] = createCharClass(CharacterType.IDEOGRAPH, {
      chars: undefined,
      round_threshold: 0.01,
    });
    this[CharacterType.COMMA] = createCharClass(CharacterType.COMMA, {
      width: 0.5,
      align: locale === "zh_TW" ? "middle" : "left",
    });
    this[CharacterType.PERIOD] = createCharClass(CharacterType.PERIOD, {
      width: 0.5,
      align: locale === "zh_TW" ? "middle" : "left",
    });
    this[CharacterType.COLON] = createCharClass(CharacterType.COLON, {
      width: feature.isVert ? 1 : 0.5,
      align: locale === "zh_CN" ? "left" : "middle",
    });
    this[CharacterType.OPEN_PAREN] = createCharClass(CharacterType.OPEN_PAREN, {
      width: 0.5,
      align: "right",
    });
    this[CharacterType.CLOSE_PAREN] = createCharClass(
      CharacterType.CLOSE_PAREN,
      { width: 0.5 }
    );
    this[CharacterType.OPEN_QUOTE] = createCharClass(CharacterType.OPEN_QUOTE, {
      width: 0.5,
      align: "right",
    });
    this[CharacterType.CLOSE_QUOTE] = createCharClass(
      CharacterType.CLOSE_QUOTE,
      { width: 0.5 }
    );
    this[CharacterType.MIDDLE_DOT] = createCharClass(CharacterType.MIDDLE_DOT, {
      width: 0.5,
      align: "middle",
    });
    this[CharacterType.QUESTION_MARK] = createCharClass(
      CharacterType.QUESTION_MARK,
      {
        width: locale === "zh_CN" ? 0.5 : 1,
        align: locale === "zh_CN" ? "left" : "middle",
      }
    );
    this[CharacterType.EXCLAMATION_MARK] = createCharClass(
      CharacterType.EXCLAMATION_MARK,
      {
        width: locale === "zh_CN" ? 0.5 : 1,
        align: locale === "zh_CN" ? "left" : "middle",
      }
    );
    this[CharacterType.COMPOSED_MARK] = createCharClass(
      CharacterType.COMPOSED_MARK
    );
    this[CharacterType.DASH] = createCharClass(CharacterType.DASH);
    this[CharacterType.TWO_EM_DASH] = createCharClass(
      CharacterType.TWO_EM_DASH,
      { width: 2 }
    );
    this[CharacterType.THREE_EM_DASH] = createCharClass(
      CharacterType.THREE_EM_DASH,
      { width: 3 }
    );
    this[CharacterType.BOX] = createCharClass(CharacterType.BOX);
  }

  [type: number]: CharClass;
  version: 1 | 2 | 3 = 3;
  dir: "yoko" | "tate";
  zw: number = 1;
  zh: number = 1;
  kanjiskip: [number, number, number] = [0, 0.25, 0];
  xkanjiskip: [number, number, number] = [0.25, 0.25, 0.125];
}
