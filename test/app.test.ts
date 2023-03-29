describe("jfm feature", () => {
  const theFeature: { [name: string]: string | boolean | undefined } = {
    boolFeatureTrue: true,
    valFeatureVal: "val",
    valFeatureTrue: true,
  };

  const getBoolJfmFeature = (name: string) => !!theFeature[name];

  const getStringJfmFeature = (name: string, defalutVal?: string) => {
    const feature = theFeature[name];
    if (feature === undefined) {
      return undefined;
    }

    return (feature === true ? defalutVal : feature) as string;
  };
  // (defalutVal === undefined
  //   ? theFeature[name]
  //   : theFeature[name] ?? defalutVal) as string | undefined;

  it("should get bool feature when true", () => {
    expect(getBoolJfmFeature("boolFeatureTrue")).toBeTruthy();
  });

  it("should get bool feature when false", () => {
    expect(getBoolJfmFeature("boolFeatureFalse")).toBeFalsy();
  });

  it("should get value feature when value given", () => {
    expect(getStringJfmFeature("valFeatureVal")).toBe("val");
  });

  it("should get value feature when true", () => {
    expect(getStringJfmFeature("valFeatureTrue", "default")).toBe("default");
  });

  it("should get value feature when false", () => {
    expect(getStringJfmFeature("valFeatureFalse", "default")).toBe(undefined);
  });
});
