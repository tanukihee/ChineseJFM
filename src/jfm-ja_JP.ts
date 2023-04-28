import { JpJfm } from "./model/JpJfm";
import { getJfmFeature, getJfmStyle } from "./util/jfmUtils";
import { providesModule } from "./util/texUtils";

providesModule("ja_JP");

const jfm = new JpJfm({
  isVert: !!getJfmFeature<boolean>("vert"),
  style: getJfmStyle(),
  halfWidthExclamationMark: !!getJfmFeature<boolean>("hwex"),
  isProportional: !!getJfmFeature<boolean>("prop"),
});

luatexja.jfont.define_jfm(jfm);
