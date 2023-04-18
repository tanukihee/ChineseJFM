describe("jfm feature", () => {
  const theFeature: { [name: string]: string | boolean | undefined } = {
    boolFeatureTrue: true,
    valFeatureVal: "val",
    valFeatureTrue: true,
  };

  const getJfmFeature = <
    T extends
      | boolean
      | string
      | { [name: string]: string | boolean | undefined }
  >(
    name: string,
    defaultVal?: T
  ) => {
    const feature = theFeature[name];

    return defaultVal !== undefined && feature === true ? defaultVal : feature;
  };

  it("should get bool feature when true", () => {
    expect(getJfmFeature<boolean>("boolFeatureTrue")).toBeTruthy();
  });

  it("should get bool feature when false", () => {
    expect(getJfmFeature<boolean>("boolFeatureFalse")).toBeFalsy();
  });

  it("should get value feature when value given", () => {
    expect(getJfmFeature<string>("valFeatureVal")).toBe("val");
    expect(getJfmFeature<string>("valFeatureVal", "default")).toBe("val");
  });

  it("should get value feature when true", () => {
    expect(getJfmFeature<string>("valFeatureTrue", "default")).toBe("default");
  });

  it("should get value feature when false", () => {
    expect(getJfmFeature<string>("valFeatureFalse", "default")).toBe(undefined);
  });
});
