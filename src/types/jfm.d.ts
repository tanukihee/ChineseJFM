import { CharacterType } from "../CharacterType";

export type JfmTable = {
  version?: 1 | 2 | 3;
  dir: "yoko" | "tate";
  zw: number;
  zh: number;
  kanjiskip?: [number, number, number];
  xkanjiskip?: [number, number, number];
} & Partial<{
  [T in CharacterType | number]: T extends CharacterType.IDEOGRAPH
    ? Omit<CharClass, "chars">
    : CharClass;
}>;

export type CharClass = {
  chars: string[];
  width: number | "prop";
  height: number | "prop";
  depth: number | "prop";
  italic: number | "prop";
  left?: number;
  down?: number;
  align?: "left" | "middle" | "right";
  kern?: {
    [T in CharacterType]?: number;
  };
  glue?: {
    [T in CharacterType]?: {
      1: number;
      2: number;
      3: number;
      priority?: [JfmGluePriority, JfmGluePriority];
      kanjiskip_natural?: number;
      kanjiskip_stretch?: number;
      kanjiskip_shrink?: number;
      end_adjust?: [number, number, number?];
      round_threshold?: number;
    };
  };
};

type JfmGluePriority = -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3;
