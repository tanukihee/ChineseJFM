import { JpJfm } from "./model/JpJfm";
import { getJfmFeature, getJfmStyle } from "./util/jfmUtils";
import { providesModule } from "./util/texUtils";

providesModule("ja_JP");

const feature = {
  isVert: !!getJfmFeature<boolean>("vert"),
  style: getJfmStyle(),
  halfWidthExclamationMark: !!getJfmFeature<boolean>("hwex"),
  isProportional: !!getJfmFeature<boolean>("prop"),
};

if (feature.isVert && feature.halfWidthExclamationMark) {
  luatexbase.module_error(
    "chinese-jfm",
    'The "hwex" feature is only available in horizontal mode.'
  );
}

const jfm = new JpJfm(feature);

luatexja.jfont.define_jfm(jfm);
