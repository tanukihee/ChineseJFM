type BaseJfmFeature = {
  style: "quanjiao" | "banjiao" | "kaiming";
  isVert: boolean;
  hang: number;
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
