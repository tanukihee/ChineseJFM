import { JfmConfig } from "./types/jfmConfig";

export const config: JfmConfig = {
  name: "jfm",
  info() {
    luatexbase.module_info("jfm", "info info");
  },
};
