import { JfmTable } from "./types/jfmTable";
import { defineJfm } from "./util/texUtils";

const t2: JfmTable = {
  dir: "yoko",
  zw: 1.0,
  zh: 1.0,

  [0]: {
    align: "left",
    left: 0.0,
    down: 0.0,
    width: "prop",
    height: "prop",
    depth: "prop",
    italic: 0.0,
  },
};

defineJfm(t2);
