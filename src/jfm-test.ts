import { CnJfm } from "./jfm/CnJfm";
import { getJfmStyle, getJfmFeature, defineJfm } from "./util/texUtils";

const jfm = new CnJfm({
  isVert: false,
  style: getJfmStyle(),
  hang: 0,
  isHalfWidthColon: getJfmFeature("hwcl"),
  fzParenthesis: Number(getJfmFeature("fzpr", { ifTrue: 0.15, ifFalse: 0 })),
});

defineJfm(jfm);

// console.log(getJfmStyle());

// const foo = Object.fromEntries([1, 2, 3, 4, 5].map((t) => [t, { foo: "bar" }]));
// console.log(foo, foo[1], foo["1"]);
