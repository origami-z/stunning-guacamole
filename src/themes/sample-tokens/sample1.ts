export const SampleToken1 = {
  brand: {
    red: {
      "10": {
        $type: "color",
        $value: {
          r: 255,
          g: 0,
          b: 0,
        },
      },
      "20": {
        $type: "color",
        $value: {
          r: 170,
          g: 0,
          b: 0,
        },
      },
    },
    orange: {
      "10": {
        $type: "color",
        $value: {
          r: 252,
          g: 197,
          b: 142,
        },
      },
      "20": {
        $type: "color",
        $value: {
          r: 249,
          g: 174,
          b: 100,
        },
      },
    },
  },
  salt: {
    palette: {
      interact: {
        cta: {
          background: {
            $type: "color",
            $value: `{brand.red.10}`,
            hover: {
              $type: "color",
              $value: `{brand.red.20}`,
            },
          },
        },
        primary: {
          background: {
            $type: "color",
            $value: `{brand.orange.10}`,
            hover: {
              $type: "color",
              $value: `{brand.orange.20}`,
            },
          },
        },
        background: {
          hover: {
            $type: "color",
            $value: {
              r: 160,
              g: 221,
              b: 164,
            },
          },
          active: {
            $type: "color",
            $value: {
              r: 112,
              g: 199,
              b: 127,
            },
          },
        },
      },
      neutral: {
        secondary: {
          background: {
            $type: "color",
            $value: {
              r: 195,
              g: 217,
              b: 243,
            },
          },
        },
      },
    },
  },
};
