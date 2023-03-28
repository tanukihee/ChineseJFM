import { Locale } from "../types/jfmFeature";
import { Glue, JfmTable } from "../types/jfmTable";

export const providesModule = luatexbase.provides_module;
export const defineJfm = luatexja.jfont.define_jfm;

export const providesJfm = (locale: Locale, jfm: JfmTable) => {
  if (!luatexja.jfont.jfm_feature) {
    tex.error(
      "JFM features unsupported. Please update luatexja to 20200919 or higher"
    );
  }

  const info = `Chinese JFM for ${
    locale === "zh_CN"
      ? "Simplified Chinese fonts (zh_CN)"
      : locale === "zh_TW"
      ? "Traditional Chinese fonts (zh_TW)"
      : "Japanese fonts (ja_JP)"
  }`;

  providesModule({
    name: "chinese-jfm",
    info,
    date: "2023/xx/xx",
    version: "v2.0.0",
  });

  defineJfm(jfm);
};

// TODO implement it
export const getJfmFeature = <T>(name: string, defaultVal?: T) =>
  luatexja.jfont.jfm_feature?.[name];

export const getJfmStyle = () => {
  const kaiming = getJfmFeature("kaiming");
  const quanjiao = getJfmFeature("quanjiao");
  const banjiao = getJfmFeature("banjiao");

  const flag = (quanjiao ? 1 : 0) + (banjiao ? 1 : 0) + (kaiming ? 1 : 0);

  if (flag > 1) {
    tex.error(
      `You can specify ONLY ONE feature among "quanjiao", "banjiao" and "kaiming"`
    );
  }

  if (flag === 0) {
    luatexbase.module_info(
      "chinese-jfm",
      "No jfm feature specified. Using kaiming feature by default."
    );
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
    (style === "quanjiao" && !isKaimingPunct)
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
