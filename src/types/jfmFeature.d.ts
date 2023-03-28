type BaseJfmFeature = {
  isVert: boolean;
  style: "quanjiao" | "banjiao" | "kaiming";
  hang: 0 | -1 | 1 | -2 | 2 | -3 | 3 | -4 | 4;
};

export type CnJfmFeature = BaseJfmFeature & {
  isHalfWidthColon: boolean;
  fzParenthesis: number;
};
export type TwJfmFeature = BaseJfmFeature & {
  halfWidthExclamationMark: boolean;
};
export type JpJfmFeature = BaseJfmFeature & {
  halfWidthExclamationMark: boolean;
  isProportional: boolean;
};

export type JfmFeature = CnJfmFeature & TwJfmFeature & JpJfmFeature;

export type Locale = "zh_CN" | "zh_TW" | "ja_JP";
