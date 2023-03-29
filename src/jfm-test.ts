import { CnJfm } from "./model/CnJfm";
import {
  getBoolJfmFeature,
  getJfmStyle,
  getStringJfmFeature,
} from "./util/jfmUtils";
import { providesModule } from "./util/texUtils";

providesModule("zh_CN");

const jfm = new CnJfm({
  isVert: false,
  style: getJfmStyle(),
  hang: Number(getStringJfmFeature("hang", "1") ?? "0"),
  isHalfWidthColon: getBoolJfmFeature("hwcl"),
  fzParenthesis: Number(getStringJfmFeature("fzpr", "0.15") ?? "0"),
});

luatexja.jfont.define_jfm(jfm);

// console.log(getJfmStyle());

// const foo = Object.fromEntries([1, 2, 3, 4, 5].map((t) => [t, { foo: "bar" }]));
// console.log(foo, foo[1], foo["1"]);
