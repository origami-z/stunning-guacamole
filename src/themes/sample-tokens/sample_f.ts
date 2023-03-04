export const SampleTokenF = {
  brand: {
    primary: {
      $type: "color",
      $value: {
        r: 226,
        g: 110,
        b: 0,
      },
    },
    secondary: {
      $type: "color",
      $value: {
        r: 76,
        g: 80,
        b: 91,
      },
    },
    feature: {
      $type: "color",
      $value: {
        r: 0,
        g: 130,
        b: 151,
      },
    },
  },
  font: {
    light: {
      $type: "fontFamily",
      $value: '"Amplitude Light","Arial Narrow",Lato,sans-serif',
    },
    regular: {
      $type: "fontFamily",
      $value: '"Amplitude Regular","Arial Narrow",Lato,sans-serif',
    },
    medium: {
      $type: "fontFamily",
      $value: '"Amplitude Medium","Arial Narrow",Lato,sans-serif',
    },
  },
  typography: {
    headline: {
      $type: "typography",
      $value: {
        fontFamily: "{font.light}",
        fontSize: "68px",
        lineHeight: "76px",
      },
    },
    h2: {
      $type: "typography",
      $value: {
        fontFamily: "{font.light}",
        fontSize: "48px",
        lineHeight: "54px",
      },
    },
    p: {
      $type: "typography",
      $value: {
        fontFamily: "{font.light}",
        fontSize: "24px",
        lineHeight: "32px",
      },
    },
  },
};
