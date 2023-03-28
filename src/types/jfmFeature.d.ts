type BaseJfmFeature = {
  vert: boolean;
  name: "quanjiao" | "banjiao" | "kaiming";
  hang: 0 | -1 | 1 | -2 | 2 | -3 | 3 | -4 | 4;
};

export type CnJfmFeature = BaseJfmFeature & { hwcl: boolean; fzpr: number };
export type TwJfmFeature = BaseJfmFeature & { hwex: boolean };
export type JpJfmFeature = BaseJfmFeature & { hwex: boolean; prop: boolean };

export type JfmFeature = CnJfmFeature & TwJfmFeature & JpJfmFeature;

export type Locale = "zh_CN" | "zh_TW" | "ja_JP";
