import { JfmTable } from "./jfm";

/** @noSelf **/
export interface LuaTeXBase {
  provides_module: (module: {
    name: string;
    info: string;
    date: string;
    version: string;
  }) => void;

  module_info: (name: string, info: string) => void;
}

/** @noSelf **/
export interface TeX {
  error: (error: string) => void;
}

/** @noSelf **/
export interface LuaTeXJa {
  jfont: {
    jfm_feature?: {
      [feature: string]: any;
    };
    define_jfm: (jfm: JfmTable) => void;
  };
}
