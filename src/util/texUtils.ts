import { Locale } from "../types/jfmFeature";
import { JfmTable } from "../types/jfmTable";

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
