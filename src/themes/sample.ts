export const simpleSample = {
  salt: {
    palette: {
      interact: {
        cta: {
          background: {
            $type: "color",
            // Orange 700
            $value: {
              r: 214,
              g: 85,
              b: 19,
            },
            hover: {
              $type: "color",
              // Orange 800
              $value: {
                r: 204,
                g: 68,
                b: 13,
              },
            },
          },
        },
        primary: {
          background: {
            $type: "color",
            $value: `{salt.color.gray.60}`,
            hover: {
              $type: "color",
              $value: `{salt.color.gray.40}`,
            },
          },
        },
        background: {
          $type: "color",
          // Transparent
          $value: {
            r: 255,
            g: 255,
            b: 255,
            a: 0,
          },
          hover: {
            $type: "color",
            // Purple 10
            $value: {
              r: 249,
              g: 224,
              b: 247,
            },
          },
          active: {
            $type: "color",
            // Purple 40
            $value: {
              r: 243,
              g: 189,
              b: 238,
            },
          },
        },
      },
      info: {
        foreground: {
          $type: "color",
          // Purple 700
          $value: {
            r: 103,
            g: 46,
            b: 122,
          },
        },
        border: {
          $type: "color",
          $value: `{salt.color.purple.700}`,
        },
      },
    },
  },
};
