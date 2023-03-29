describe("jfm feature", () => {
  const theFeature: { [name: string]: string | boolean } = {
    boolFeatureTrue: true,
    valFeatureVal: "val",
    valFeatureTrue: true,
  };

  const expectedFeature = {
    boolFeatureTrue: true,
    boolFeatureFalse: false,
    valFeatureVal: "val",
    valFeatureTrue: "default true",
    valFeatureFalse: "default false",
  };

  const getJfmFeature = <T>(
    name: string,
    defaultValue?: { ifTrue: T; ifFalse: T }
  ) => {
    type R = unknown extends T ? boolean : T;

    const feature = theFeature[name];

    if (defaultValue === undefined) {
      return (feature !== undefined) as R;
    }

    if (feature === undefined) {
      return defaultValue.ifFalse as R;
    }

    return (feature === true ? defaultValue.ifTrue : feature) as R;
  };

  it("should get bool feature when true", () => {
    expect(getJfmFeature("boolFeatureTrue")).toBe(
      expectedFeature.boolFeatureTrue
    );
  });

  it("should get bool feature when false", () => {
    expect(getJfmFeature("boolFeatureFalse")).toBe(
      expectedFeature.boolFeatureFalse
    );
  });

  it("should get value feature when value given", () => {
    expect(
      getJfmFeature("valFeatureVal", {
        ifTrue: "default true",
        ifFalse: "default false",
      })
    ).toBe(expectedFeature.valFeatureVal);
  });

  it("should get value feature when true", () => {
    expect(
      getJfmFeature("valFeatureTrue", {
        ifTrue: "default true",
        ifFalse: "default false",
      })
    ).toBe(expectedFeature.valFeatureTrue);
  });

  it("should get value feature when false", () => {
    expect(
      getJfmFeature("valFeatureFalse", {
        ifTrue: "default true",
        ifFalse: "default false",
      })
    ).toBe(expectedFeature.valFeatureFalse);
  });
});
