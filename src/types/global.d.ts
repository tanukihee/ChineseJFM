import { LuaTeXBase, TeX, LuaTeXJa } from "./tex";

declare global {
  const luatexbase: LuaTeXBase;
  const tex: TeX;
  const luatexja: LuaTeXJa;
}
