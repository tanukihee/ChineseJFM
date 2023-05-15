import { CnJfm } from "./model/CnJfm";
import { getJfmFeature, getJfmStyle } from "./util/jfmUtils";
import { providesModule } from "./util/texUtils";

providesModule("zh_CN");

const feature = {
  isVert: !!getJfmFeature<boolean>("vert"),
  style: getJfmStyle(),
  isHalfWidthColon: !!getJfmFeature<boolean>("hwcl"),
  fzParenthesis: Number(getJfmFeature<string>("fzpr", "0.15") ?? "0"),
  // hang: getJfmFeature<{
  //   [p in
  //     | "COMMA"
  //     | "PERIOD"
  //     | "COLON"
  //     | "OPEN_PAREN"
  //     | "CLOSE_PAREN"
  //     | "OPEN_QUOTE"
  //     | "CLOSE_QUOTE"
  //     | "MIDDLE_DOT"
  //     | "QUESTION_MARK"
  //     | "EXCLAMATION_MARK"]?: boolean;
  // }>("hang", {
  //   COMMA: true,
  //   PERIOD: true,
  // })!,
};

if (feature.isHalfWidthColon && !feature.isVert) {
  luatexbase.module_error(
    "chinese-jfm",
    'The "hwcl" feature is only available in vertical mode.'
  );
}

const jfm = new CnJfm(feature);

luatexja.jfont.define_jfm(jfm);
