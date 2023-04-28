import { CharacterType } from "../asset/Characters";
import { JpJfmFeature } from "../types/jfmFeature";
import { createGlue, mapGlues } from "../util/jfmUtils";
import { AbstractJfm } from "./AbstractJfm";

export class JpJfm extends AbstractJfm {
  constructor(feature: JpJfmFeature) {
    super("ja_JP", feature);

    const aki = createGlue(feature.style);

    const regulars = [
      CharacterType.IDEOGRAPH,
      CharacterType.OPEN_PAREN,
      CharacterType.OPEN_QUOTE,
      CharacterType.DASH,
      CharacterType.TWO_EM_DASH,
      CharacterType.THREE_EM_DASH,
    ];
    const opens = [CharacterType.OPEN_PAREN, CharacterType.OPEN_QUOTE];
    const dashes = [
      CharacterType.DASH,
      CharacterType.TWO_EM_DASH,
      CharacterType.THREE_EM_DASH,
    ];

    this[CharacterType.IDEOGRAPH].glue = {
      ...mapGlues(opens, aki(0.5, -1)),
      [CharacterType.COLON]: aki(0.25),
      [CharacterType.MIDDLE_DOT]: aki(0.25, -1),
      [CharacterType.EXCLAMATION_MARK]: feature.halfWidthExclamationMark
        ? aki(0.25, 1, true)
        : undefined,
    };
    this[CharacterType.IDEOGRAPH].width = feature.isProportional ? "prop" : 1;

    this[CharacterType.COMMA].glue = mapGlues(regulars, aki(0.5));

    this[CharacterType.PERIOD].glue = mapGlues(regulars, aki(0.5, 1, true));

    this[CharacterType.COLON].glue = mapGlues(regulars, aki(0.25));

    this[CharacterType.CLOSE_PAREN].glue = {
      ...mapGlues(regulars, aki(0.5, -1)),
      [CharacterType.MIDDLE_DOT]: aki(0.25, -1),
      [CharacterType.EXCLAMATION_MARK]: feature.halfWidthExclamationMark
        ? aki(0.25, 1, true)
        : undefined,
    };

    this[CharacterType.CLOSE_QUOTE].glue = {
      ...mapGlues(regulars, aki(0.5, -1)),
      [CharacterType.MIDDLE_DOT]: aki(0.25, -1),
      [CharacterType.EXCLAMATION_MARK]: feature.halfWidthExclamationMark
        ? aki(0.25, 1, true)
        : undefined,
    };

    this[CharacterType.MIDDLE_DOT].glue = mapGlues(
      [...opens, CharacterType.IDEOGRAPH],
      aki(0.25, -1)
    );

    this[CharacterType.EXCLAMATION_MARK].glue = {
      ...mapGlues(regulars, aki(0.25, 1, true)),
      [CharacterType.MIDDLE_DOT]: aki(0.25, -1),
    };
    this[CharacterType.EXCLAMATION_MARK].width =
      feature.halfWidthExclamationMark ? 0.5 : 1;

    dashes.forEach((t) => {
      this[t].glue = mapGlues(opens, aki(0.5, -1));
      this[t].kern = Object.fromEntries(dashes.map((d) => [d, 0]));
    });

    this[CharacterType.BOX].glue = {
      [CharacterType.MIDDLE_DOT]: aki(0.25, -1),
    };
  }
}
