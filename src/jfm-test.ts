import { JfmTable } from "./types/jfm";
import { createJfmTable } from "./util/createJfmTable";
import { defineJfm } from "./util/texUtils";

const t1 = createJfmTable();

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
