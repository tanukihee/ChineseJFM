import { CharacterType } from "../asset/Characters";
import { CnJfmFeature } from "../types/jfmFeature";
import { createGlue, mapGlues } from "../util/jfmUtils";
import { AbstractJfm } from "./AbstractJfm";

export class CnJfm extends AbstractJfm {
  constructor(feature: CnJfmFeature) {
    super("zh_CN", feature);

    const aki = createGlue(feature.style);

    const opens = [CharacterType.OPEN_PAREN, CharacterType.OPEN_QUOTE];
    const dashes = [
      CharacterType.DASH,
      CharacterType.TWO_EM_DASH,
      CharacterType.THREE_EM_DASH,
    ];
    const regulars = [CharacterType.IDEOGRAPH, ...opens, ...dashes];

    this[CharacterType.IDEOGRAPH].glue = {
      ...mapGlues(opens, aki(0.5, -1)),
      [CharacterType.MIDDLE_DOT]: aki(0.25, -1),
    };

    this[CharacterType.COMMA].glue = mapGlues(regulars, aki(0.5));

    this[CharacterType.PERIOD].glue = mapGlues(regulars, aki(0.5, 1, true));

    this[CharacterType.COLON].glue = mapGlues(
      regulars,
      feature.isHalfWidthColon ? aki(0.5) : undefined
    );

    this[CharacterType.OPEN_PAREN].left = -feature.fzParenthesis;

    this[CharacterType.CLOSE_PAREN].glue = {
      ...mapGlues(regulars, aki(0.5, -1)),
      [CharacterType.MIDDLE_DOT]: aki(0.25, -1),
    };
    this[CharacterType.CLOSE_PAREN].left = feature.fzParenthesis;

    this[CharacterType.CLOSE_QUOTE].glue = {
      ...mapGlues(regulars, aki(0.5, -1)),
      [CharacterType.MIDDLE_DOT]: aki(0.25, -1),
    };

    this[CharacterType.MIDDLE_DOT].glue = mapGlues(
      [...regulars, CharacterType.MIDDLE_DOT],
      aki(0.25, -1)
    );

    [CharacterType.QUESTION_MARK, CharacterType.EXCLAMATION_MARK].forEach(
      (t) => {
        this[t].glue = mapGlues(
          regulars,
          feature.isVert ? undefined : aki(0.5, 1, true)
        );
      }
    );

    dashes.forEach((t) => {
      this[t].glue = {
        ...mapGlues(opens, aki(0.5, -1)),
        [CharacterType.MIDDLE_DOT]: aki(0.25, -1),
      };
      this[t].kern = Object.fromEntries(dashes.map((d) => [d, 0]));
    });

    this[CharacterType.BOX].glue = {
      [CharacterType.MIDDLE_DOT]: aki(0.25, -1),
    };
  }
}
