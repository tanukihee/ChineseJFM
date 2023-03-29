import { JfmTable } from "./jfmTable";

/** @noSelf **/
export interface LuaTeXBase {
  module_info: (name: string, info: string) => void;
  module_warning: (name: string, warn: string) => void;
  module_error: (name: string, error: string) => void;
}

/** @noSelf **/
export interface LuaTeXJa {
  jfont: {
    jfm_feature?: {
      [feature: string]: string | boolean | undefined;
    };
    define_jfm: (jfm: JfmTable) => void;
  };
}
