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
    jfm_feature?: JfmFeatureType;
    define_jfm: (jfm: JfmTable) => void;
  };
}

export type JfmFeatureType = {
  [feature: string]: string | boolean | undefined | JfmFeatureType;
};

export type FeatureType = string | boolean | undefined | JfmFeatureType;
