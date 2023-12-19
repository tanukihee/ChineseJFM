type BaseJfmFeature = {
  style: "quanjiao" | "banjiao" | "kaiming";
  isVert: boolean;
  // TODO
  // hang: JfmFeatureType;
};
export type BaseJfmFeatureName = BaseJfmFeature["style"] | "styl" | "vert";
// TODO
// | "hang";

export type CnJfmFeature = BaseJfmFeature & {
  isHalfWidthColon: boolean;
  fzParenthesis: number;
};
export type CnJfmFeatureName = BaseJfmFeatureName | "hwcl" | "fzpr";
export type TwJfmFeature = BaseJfmFeature & {
  halfWidthExclamationMark: boolean;
};
export type TwJfmFeatureName = BaseJfmFeatureName | "hwex";
export type JpJfmFeature = BaseJfmFeature & {
  halfWidthExclamationMark: boolean;
  isProportional: boolean;
};
export type JpJfmFeatureName = BaseJfmFeatureName | "hwex" | "prop";

export type JfmFeature = CnJfmFeature & TwJfmFeature & JpJfmFeature;
export type JfmFeatureName =
  | CnJfmFeatureName
  | TwJfmFeatureName
  | JpJfmFeatureName;

export type Locale = "zh_CN" | "zh_TW" | "ja_JP";
