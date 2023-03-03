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
          r: 200,
          g: 0,
          b: 0,
        },
      },
    },
    gray: {
      $type: "color",
      $value: {
        r: 200,
        g: 200,
        b: 200,
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
            $value: `{brand.gray}`,
            hover: {
              $type: "color",
              $value: `{salt.color.gray.40}`,
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
    },
  },
};
