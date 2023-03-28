import { CnJfmFeature } from "../types/jfmFeature";
import { AbstractJfm } from "./AbstractJfm";

export class CnJfm extends AbstractJfm {
  constructor(feature: CnJfmFeature) {
    super("zh_CN", feature);
  }
}
