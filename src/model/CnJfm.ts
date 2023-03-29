import { CharacterType } from "../asset/Characters";
import { CnJfmFeature } from "../types/jfmFeature";
import { createGlue, mapGlues } from "../util/jfmUtils";
import { AbstractJfm } from "./AbstractJfm";

export class CnJfm extends AbstractJfm {
  constructor(feature: CnJfmFeature) {
    super("zh_CN", feature);

    const aki = createGlue(feature.style);

    this[CharacterType.IDEOGRAPH].glue = {
      ...mapGlues(
        [CharacterType.OPEN_PAREN, CharacterType.OPEN_QUOTE],
        aki(0.5, -1)
      ),
      [CharacterType.MIDDLE_DOT]: aki(0.25, -1),
    };

    this[CharacterType.COMMA].glue = mapGlues(
      [
        CharacterType.IDEOGRAPH,
        CharacterType.OPEN_PAREN,
        CharacterType.OPEN_QUOTE,
        CharacterType.DASH,
        CharacterType.TWO_EM_DASH,
        CharacterType.THREE_EM_DASH,
      ],
      aki(0.5)
    );

    this[CharacterType.PERIOD].glue = mapGlues(
      [
        CharacterType.IDEOGRAPH,
        CharacterType.OPEN_PAREN,
        CharacterType.OPEN_QUOTE,
        CharacterType.DASH,
        CharacterType.TWO_EM_DASH,
        CharacterType.THREE_EM_DASH,
      ],
      aki(0.5, 1, true)
    );

    this[CharacterType.COLON].glue = mapGlues(
      [
        CharacterType.IDEOGRAPH,
        CharacterType.OPEN_PAREN,
        CharacterType.OPEN_QUOTE,
        CharacterType.DASH,
        CharacterType.TWO_EM_DASH,
        CharacterType.THREE_EM_DASH,
      ],
      feature.isVert && !feature.isHalfWidthColon ? undefined : aki(0.5)
    );

    this[CharacterType.OPEN_PAREN].left = -feature.fzParenthesis;

    this[CharacterType.CLOSE_PAREN].glue = {
      ...mapGlues(
        [
          CharacterType.IDEOGRAPH,
          CharacterType.OPEN_PAREN,
          CharacterType.OPEN_QUOTE,
          CharacterType.DASH,
          CharacterType.TWO_EM_DASH,
          CharacterType.THREE_EM_DASH,
        ],
        aki(0.5, -1)
      ),
      [CharacterType.MIDDLE_DOT]: aki(0.25, -1),
    };
    this[CharacterType.CLOSE_PAREN].left = feature.fzParenthesis;

    this[CharacterType.CLOSE_QUOTE].glue = {
      ...mapGlues(
        [
          CharacterType.IDEOGRAPH,
          CharacterType.OPEN_PAREN,
          CharacterType.OPEN_QUOTE,
          CharacterType.DASH,
          CharacterType.TWO_EM_DASH,
          CharacterType.THREE_EM_DASH,
        ],
        aki(0.5, -1)
      ),
      [CharacterType.MIDDLE_DOT]: aki(0.25, -1),
    };

    this[CharacterType.MIDDLE_DOT].glue = {
      ...mapGlues(
        [
          CharacterType.IDEOGRAPH,
          CharacterType.OPEN_PAREN,
          CharacterType.OPEN_QUOTE,
          CharacterType.DASH,
          CharacterType.TWO_EM_DASH,
          CharacterType.THREE_EM_DASH,
        ],
        aki(0.25, -1)
      ),
      [CharacterType.MIDDLE_DOT]: aki(0.5, -1),
    };

    [CharacterType.QUESTION_MARK, CharacterType.EXCLAMATION_MARK].forEach(
      (t) => {
        this[t].glue = mapGlues(
          [
            CharacterType.IDEOGRAPH,
            CharacterType.OPEN_PAREN,
            CharacterType.OPEN_QUOTE,
            CharacterType.DASH,
            CharacterType.TWO_EM_DASH,
            CharacterType.THREE_EM_DASH,
          ],
          feature.isVert ? undefined : aki(0.5, 1, true)
        );
      }
    );

    [
      CharacterType.DASH,
      CharacterType.TWO_EM_DASH,
      CharacterType.THREE_EM_DASH,
    ].forEach((t) => {
      this[t].glue = mapGlues(
        [CharacterType.OPEN_PAREN, CharacterType.OPEN_QUOTE],
        aki(0.5, -1)
      );
      this[t].kern = {
        [CharacterType.DASH]: 0,
        [CharacterType.TWO_EM_DASH]: 0,
        [CharacterType.THREE_EM_DASH]: 0,
      };
    });

    this[CharacterType.BOX].glue = {
      [CharacterType.MIDDLE_DOT]: aki(0.25, -1),
    };
  }
}
