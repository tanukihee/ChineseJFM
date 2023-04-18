import { CnJfm } from "./model/CnJfm";
import { JfmFeatureType } from "./types/tex";
import { getJfmFeature, getJfmStyle } from "./util/jfmUtils";
import { providesModule } from "./util/texUtils";

providesModule("zh_CN");

const jfm = new CnJfm({
  isVert: false,
  style: getJfmStyle(),
  hang: getJfmFeature<JfmFeatureType>("hang", { COMMA: true, PERIOD: true })!,
  isHalfWidthColon: !!getJfmFeature<boolean>("hwcl"),
  fzParenthesis: Number(getJfmFeature<string>("fzpr", "0.15") ?? "0"),
});

luatexja.jfont.define_jfm(jfm);

// console.log(getJfmStyle());

// const foo = Object.fromEntries([1, 2, 3, 4, 5].map((t) => [t, { foo: "bar" }]));
// console.log(foo, foo[1], foo["1"]);
