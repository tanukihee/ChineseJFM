import { CnJfm } from "./jfm/CnJfm";
import { defineJfm, getJfmFeature, getJfmStyle } from "./util/texUtils";

// const t2: JfmTable = {
//   dir: "yoko",
//   zw: 1.0,
//   zh: 1.0,

//   [0]: {
//     align: "left",
//     left: 0.0,
//     down: 0.0,
//     width: "prop",
//     height: "prop",
//     depth: "prop",
//     italic: 0.0,
//   },
// };

// defineJfm(t2);

const jfm = new CnJfm({
  isVert: false,
  style: getJfmStyle(),
  hang: 0,
  isHalfWidthColon: getJfmFeature("hwcl"),
  fzParenthesis: Number(getJfmFeature("fzpr", 0.15)),
});

defineJfm(jfm);

console.log(getJfmStyle());

// const foo = Object.fromEntries([1, 2, 3, 4, 5].map((t) => [t, { foo: "bar" }]));
// console.log(foo, foo[1], foo["1"]);
