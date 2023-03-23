type BaseJfmFeature = {
  vert?: boolean;
  hang?: 0 | -1 | 1 | -2 | 2 | -3 | 3 | -4 | 4;
};
type JfmNames = { name: "quanjiao" | "banjiao" | "kaiming" };

export type CnJfmFeature = JfmNames &
  BaseJfmFeature & { hwcl: boolean; fzpr: number };
export type TwJfmFeature = JfmNames & BaseJfmFeature & { hwex: boolean };
export type JpJfmFeature = JfmNames &
  BaseJfmFeature & { hwex: boolean; prop: boolean };

export type JfmFeatures = CnJfmFeature & TwJfmFeature & JpJfmFeature;
