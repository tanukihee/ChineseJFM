import { TwJfm } from "./model/TwJfm";
import { getJfmFeature, getJfmStyle } from "./util/jfmUtils";
import { providesModule } from "./util/texUtils";

providesModule("zh_TW");

const feature = {
  isVert: !!getJfmFeature<boolean>("vert"),
  style: getJfmStyle(),
  halfWidthExclamationMark: !!getJfmFeature<boolean>("hwex"),
};

if (feature.isVert && feature.halfWidthExclamationMark) {
  luatexbase.module_error(
    "chinese-jfm",
    'The "hwex" feature is only available in horizontal mode.'
  );
}

const jfm = new TwJfm(feature);

luatexja.jfont.define_jfm(jfm);
