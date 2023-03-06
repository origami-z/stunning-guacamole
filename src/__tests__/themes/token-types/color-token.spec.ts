import {ColorToken, isBaseOpacityValue, isRGBA255} from '../../../themes/token-types/color-token'

describe("isRGBA255", () => {
  test("rgba object is valid", () => {
    expect(isRGBA255({
      r: 0,
      g: 0,
      b: 0,
      a: 1,
    })).toBe(true)
  })
  test("rgb object is valid", () => {
    expect(isRGBA255({
      r: 0,
      g: 0,
      b: 0,
    })).toBe(true)
  })

  test("random object is not valid", () => {
    expect(isRGBA255({
      foo: 0,
      bar: 0,
    })).toBe(false)
  })
  test("missing r/g/b field is not valid", () => {
    expect(isRGBA255({
      r: 0,
      g: 0,
    })).toBe(false)
    expect(isRGBA255({
      r: 0,
      b: 0,
    })).toBe(false)
    expect(isRGBA255({
      g: 0,
      b: 0,
    })).toBe(false)
  })
})

describe("isBaseOpacityValue", () => {
  test("object with base value of reference is valid", () => {
    expect(isBaseOpacityValue({
      base: '{ref.value}'
    })).toBe(true)
  })
  test("object with base value of rgba is valid", () => {
    expect(isBaseOpacityValue({
      base:{
        r: 0,
        g: 0,
        b: 0,
      }
    })).toBe(true)
  })
  test("object with base value and opacity value of reference is valid", () => {
    expect(isBaseOpacityValue({
      base: '{ref.value}',
      opacity: '{ref.alpha}'
    })).toBe(true)
  })
  test("object with base value and opacity value of number is valid", () => {
    expect(isBaseOpacityValue({
      base: '{ref.value}',
      opacity: 0.5
    })).toBe(true)
  })
})

describe("ColorToken", () => {
  test("can has other token properties like $description", () => {
    ({
      $type: "color",
      $value: "{ref.value}",
      $description: "some description",
    } satisfies ColorToken);
  });
  test("ref value is valid", () => {
    ({
      $type: "color",
      $value: "{ref.value}",
    } satisfies ColorToken);
  });
  test("rgba value is valid", () => {
    ({
      $type: "color",
      $value: {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      },
    } satisfies ColorToken);
  });
  test("random value is not valid", () => {
    ({
      $type: "color",
      $value: {
        // @ts-expect-error
        foo: ''
      },
    } satisfies ColorToken);
  });
});