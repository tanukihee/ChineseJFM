export const providesModule = luatexbase.provides_module;
export const providesJfm = (infoFor: "zh_CN" | "zh_TW" | "ja_JP") => {
  if (!luatexja.jfont.jfm_feature) {
    tex.error(
      "JFM features unsupported. Please update luatexja to 20200919 or higher"
    );
  }

  const info = `Chinese JFM for ${
    infoFor === "zh_CN"
      ? "Simplified Chinese fonts (zh_CN)"
      : infoFor === "zh_TW"
      ? "Traditional Chinese fonts (zh_TW)"
      : "Japanese fonts (ja_JP)"
  }`;

  providesModule({
    name: "chinese-jfm",
    info,
    date: "2023/xx/xx",
    version: "v2.0.0",
  });
};

export const defineJfm = luatexja.jfont.define_jfm;
