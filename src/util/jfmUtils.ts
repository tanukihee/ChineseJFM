import { Glue } from "../types/jfmTable";

export const getBoolJfmFeature = (name: string) =>
  !!luatexja.jfont.jfm_feature?.[name];

export const getStringJfmFeature = (name: string, defalutVal?: string) => {
  const feature = luatexja.jfont.jfm_feature?.[name];
  if (feature === undefined) {
    return undefined;
  }

  return (feature === true ? defalutVal : feature) as string;
};

export const getJfmStyle = () => {
  const style = getStringJfmFeature("styl");

  const kaiming = getBoolJfmFeature("kaiming");
  const quanjiao = getBoolJfmFeature("quanjiao");
  const banjiao = getBoolJfmFeature("banjiao");
  const flag = (quanjiao ? 1 : 0) + (banjiao ? 1 : 0) + (kaiming ? 1 : 0);

  if (style !== undefined && flag !== 0) {
    luatexbase.module_warning(
      "chinese-jfm",
      `Feature "styl" specified, using "${style}" style.`
    );

    return style as "quanjiao" | "banjiao" | "kaiming";
  }

  if (flag > 1) {
    luatexbase.module_error(
      "chinese-jfm",
      `You can specify ONLY ONE feature in "quanjiao", "banjiao" and "kaiming".`
    );
  }

  if (flag === 0) {
    luatexbase.module_info(
      "chinese-jfm",
      `No jfm feature specified. Using "kaiming" style by default.`
    );

    return "kaiming";
  }

  return banjiao ? "banjiao" : quanjiao ? "quanjiao" : "kaiming";
};

export const createGlue: (
  style: "quanjiao" | "banjiao" | "kaiming"
) => (
  width: number,
  priority?: number,
  isKaimingPunct?: boolean,
  optional?: Glue
) => Glue =
  (style) =>
  (width, priority = 0, isKaimingPunct = false, optional) =>
    (style === "banjiao" && isKaimingPunct) ||
    (style !== "quanjiao" && !isKaimingPunct)
      ? { 1: 0, 2: width, 3: 0, priority: [priority, -priority], ...optional }
      : {
          1: width,
          2: 0,
          3: width,
          priority: [priority, -priority],
          ...optional,
        };

export const mapGlues = (type: number[], glue: Glue | undefined) =>
  Object.fromEntries(type.map((t) => [t, glue]));
