export type JfmTable = {
  version?: 1 | 2 | 3;
  dir: "yoko" | "tate";
  zw: number;
  zh: number;
  kanjiskip?: [number, number, number];
  xkanjiskip?: [number, number, number];
  [type: number]: CharClass;
};

export type CharClass = {
  chars?: Chars;
  width?: number | "prop";
  height?: number | "prop";
  depth?: number | "prop";
  italic?: number | "prop";
  left?: number;
  down?: number;
  align?: "left" | "middle" | "right";
  kern?: Record<number, number>;
  glue?: Record<number, Glue | undefined>;
  end_adjust?: [number, number, number?];
  round_threshold?: number;
};

type Glue = {
  1: number;
  2: number;
  3: number;
  priority?: [number, number] | number;
  kanjiskip_natural?: number;
  kanjiskip_stretch?: number;
  kanjiskip_shrink?: number;
};
type Chars =
  | string[]
  | (
      | "boxbdd"
      | "parbdd"
      | "jcharbdd"
      | "alchar"
      | "nox alchar"
      | "glue"
      | -1
    )[];
