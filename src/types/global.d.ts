import { JfmConfig } from "./jfmConfig";
import { LuaTeXBase, LuaTeXJa } from "./tex";

declare global {
  const luatexbase: LuaTeXBase;
  const luatexja: LuaTeXJa;
  let chinese_jfm: JfmConfig;
}
