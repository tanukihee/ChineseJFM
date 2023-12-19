import { config } from "../chinese_jfm";
import { Locale } from "../types/jfmFeature";

export const providesModule = (locale: Locale) => {
  const info = `JFM file for ${
    locale === "zh_CN"
      ? "Simplified Chinese fonts (zh_CN)"
      : locale === "zh_TW"
      ? "Traditional Chinese fonts (zh_TW)"
      : "Japanese fonts (ja_JP)"
  }`;
  const date = "2023/xx/xx";
  const version = "v2.0.0";

  luatexbase.module_info(
    "chinese-jfm",
    `Module chinese-jfm ${date} ${version}\n${info}`
  );

  if (!luatexja.jfont.jfm_feature) {
    luatexbase.module_error(
      "chinese-jfm",
      "JFM features are not supported. Please update luatexja to 20200919 or higher"
    );
  }

  chinese_jfm = config;
};
