export const paletteDark = {
  salt: {
    palette: {
      accent: {
        background: {
          $type: "color",
          $value: "{salt.color.blue.500}",
        },
        border: {
          $type: "color",
          $value: "{salt.color.blue.500}",
        },
        foreground: {
          $type: "color",
          $value: "{salt.color.white}",
        },
      },
      interact: {
        background: {
          $type: "color",
          $value: {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
          },
          active: {
            $type: "color",
            $value: "{salt.color.blue.700}",
          },
          blurSelected: {
            $type: "color",
            $value: "{salt.color.gray.600}",
          },
          hover: {
            $type: "color",
            $value: "{salt.color.blue.800}",
          },
          disabled: {
            $type: "color",
            $value: {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
            },
          },
        },
        border: {
          $type: "color",
          $value: "{salt.color.gray.90}",
          active: {
            $type: "color",
            $value: "{salt.color.blue.100}",
          },
          activeDisabled: {
            $type: "color",
            $value: "{salt.color.blue.100.fade.fill}",
          },
          disabled: {
            $type: "color",
            $value: "{salt.color.gray.90.fade.border}",
          },
          hover: {
            $type: "color",
            $value: "{salt.color.blue.500}",
          },
          readonly: {
            $type: "color",
            $value: "{salt.color.gray.90.fade.border.readonly}",
          },
        },
        foreground: {
          $type: "color",
          $value: "{salt.color.white}",
          disabled: {
            $type: "color",
            $value: "{salt.color.white.fade.foreground}",
          },
          partial: {
            $type: "color",
            $value: "{salt.color.blue.100}",
          },
          partialDisabled: {
            $type: "color",
            $value: "{salt.color.blue.100.fade.foreground}",
          },
        },
        outline: {
          $type: "color",
          $value: "{salt.color.blue.100}",
        },
        cta: {
          background: {
            $type: "color",
            $value: "{salt.color.blue.600}",
            active: {
              $type: "color",
              $value: "{salt.color.blue.700}",
            },
            activeDisabled: {
              $type: "color",
              $value: "{salt.color.blue.700.fade.background}",
            },
            disabled: {
              $type: "color",
              $value: "{salt.color.blue.600.fade.background}",
            },
            hover: {
              $type: "color",
              $value: "{salt.color.blue.500}",
            },
          },
          foreground: {
            $type: "color",
            $value: "{salt.color.white}",
            active: {
              $type: "color",
              $value: "{salt.color.white}",
            },
            activeDisabled: {
              $type: "color",
              $value: "{salt.color.white.fade.foreground}",
            },
            disabled: {
              $type: "color",
              $value: "{salt.color.white.fade.foreground}",
            },
            hover: {
              $type: "color",
              $value: "{salt.color.white}",
            },
          },
        },
        primary: {
          background: {
            $type: "color",
            $value: "{salt.color.gray.300}",
            active: {
              $type: "color",
              $value: "{salt.color.gray.70}",
            },
            activeDisabled: {
              $type: "color",
              $value: "{salt.color.gray.70.fade.background}",
            },
            disabled: {
              $type: "color",
              $value: "{salt.color.gray.300.fade.background}",
            },
            hover: {
              $type: "color",
              $value: "{salt.color.gray.200}",
            },
          },
          foreground: {
            $type: "color",
            $value: "{salt.color.white}",
            active: {
              $type: "color",
              $value: "{salt.color.gray.900}",
            },
            activeDisabled: {
              $type: "color",
              $value: "{salt.color.gray.900.fade.foreground}",
            },
            disabled: {
              $type: "color",
              $value: "{salt.color.white.fade.foreground}",
            },
            hover: {
              $type: "color",
              $value: "{salt.color.white}",
            },
          },
        },
        secondary: {
          background: {
            $type: "color",
            $value: {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
            },
            active: {
              $type: "color",
              $value: "{salt.color.gray.70}",
            },
            activeDisabled: {
              $type: "color",
              $value: "{salt.color.gray.70.fade.background}",
            },
            disabled: {
              $type: "color",
              $value: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
            hover: {
              $type: "color",
              $value: "{salt.color.gray.200}",
            },
          },
          foreground: {
            $type: "color",
            $value: "{salt.color.white}",
            active: {
              $type: "color",
              $value: "{salt.color.gray.900}",
            },
            activeDisabled: {
              $type: "color",
              $value: "{salt.color.gray.900.fade.foreground}",
            },
            disabled: {
              $type: "color",
              $value: "{salt.color.white.fade.foreground}",
            },
            hover: {
              $type: "color",
              $value: "{salt.color.white}",
            },
          },
        },
      },
      error: {
        background: {
          emphasize: {
            $type: "color",
            $value: "{salt.color.red.900}",
          },
        },
        border: {
          $type: "color",
          $value: "{salt.color.red.500}",
        },
        foreground: {
          $type: "color",
          $value: "{salt.color.red.500}",
        },
      },
      info: {
        background: {
          emphasize: {
            $type: "color",
            $value: "{salt.color.blue.900}",
          },
        },
        border: {
          $type: "color",
          $value: "{salt.color.blue.500}",
        },
        foreground: {
          $type: "color",
          $value: "{salt.color.blue.500}",
        },
      },
      success: {
        background: {
          emphasize: {
            $type: "color",
            $value: "{salt.color.green.900}",
          },
        },
        border: {
          $type: "color",
          $value: "{salt.color.green.500}",
        },
        foreground: {
          $type: "color",
          $value: "{salt.color.green.500}",
        },
      },
      warning: {
        background: {
          emphasize: {
            $type: "color",
            $value: "{salt.color.orange.900}",
          },
        },
        border: {
          $type: "color",
          $value: "{salt.color.orange.500}",
        },
        foreground: {
          $type: "color",
          $value: "{salt.color.orange.500}",
        },
      },
      measured: {
        fill: {
          $type: "color",
          $value: "{salt.color.blue.300}",
          disabled: {
            $type: "color",
            $value: "{salt.color.blue.300.fade.fill}",
          },
        },
        foreground: {
          $type: "color",
          $value: "{salt.color.gray.90}",
          active: {
            $type: "color",
            $value: "{salt.color.blue.300}",
          },
          disabled: {
            $type: "color",
            $value: "{salt.color.gray.90.fade.foreground}",
          },
          activeDisabled: {
            $type: "color",
            $value: "{salt.color.blue.300.fade.fill}",
          },
        },
        background: {
          $type: "color",
          $value: "{salt.color.gray.300}",
          disabled: {
            $type: "color",
            $value: "{salt.color.gray.300.fade.background}",
          },
        },
        border: {
          $type: "color",
          $value: "{salt.color.gray.90}",
          disabled: {
            $type: "color",
            $value: "{salt.color.gray.90.fade.border}",
          },
        },
      },
      navigate: {
        primary: {
          background: {
            $type: "color",
            $value: {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
            },
            active: {
              $type: "color",
              $value: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
            hover: {
              $type: "color",
              $value: "{salt.color.gray.700}",
            },
          },
        },
        secondary: {
          background: {
            $type: "color",
            $value: {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
            },
            active: {
              $type: "color",
              $value: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
            hover: {
              $type: "color",
              $value: "{salt.color.gray.600}",
            },
          },
        },
        tertiary: {
          background: {
            $type: "color",
            $value: {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
            },
            active: {
              $type: "color",
              $value: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
            hover: {
              $type: "color",
              $value: "{salt.color.gray.700}",
            },
          },
        },
        foreground: {
          hover: {
            $type: "color",
            $value: "{salt.color.blue.200}",
          },
          active: {
            $type: "color",
            $value: "{salt.color.blue.300}",
          },
          visited: {
            $type: "color",
            $value: "{salt.color.purple.100}",
          },
        },
        indicator: {
          hover: {
            $type: "color",
            $value: "{salt.color.gray.90}",
          },
          active: {
            $type: "color",
            $value: "{salt.color.orange.400}",
          },
          activeDisabled: {
            $type: "color",
            $value: "{salt.color.orange.400.fade.border}",
          },
        },
      },
      negative: {
        foreground: {
          $type: "color",
          $value: "{salt.color.red.300}",
        },
      },
      neutral: {
        primary: {
          background: {
            $type: "color",
            $value: "{salt.color.gray.800}",
            disabled: {
              $type: "color",
              $value: "{salt.color.gray.800.fade.background}",
            },
            readonly: {
              $type: "color",
              $value: "{salt.color.gray.800.fade.background.readonly}",
            },
          },
          border: {
            $type: "color",
            $value: "{salt.color.gray.300}",
            disabled: {
              $type: "color",
              $value: "{salt.color.gray.300.fade.border}",
            },
          },
          foreground: {
            $type: "color",
            $value: "{salt.color.white}",
            disabled: {
              $type: "color",
              $value: "{salt.color.white.fade.foreground}",
            },
          },
          separator: {
            $type: "color",
            $value: "{salt.color.white.fade.separatorOpacity.primary}",
          },
        },
        secondary: {
          background: {
            $type: "color",
            $value: "{salt.color.gray.600}",
            disabled: {
              $type: "color",
              $value: "{salt.color.gray.600.fade.background}",
            },
            readonly: {
              $type: "color",
              $value: "{salt.color.gray.600.fade.background.readonly}",
            },
          },
          border: {
            $type: "color",
            $value: "{salt.color.gray.90}",
            disabled: {
              $type: "color",
              $value: "{salt.color.gray.90.fade.border}",
            },
          },
          foreground: {
            $type: "color",
            $value: "{salt.color.gray.70}",
            disabled: {
              $type: "color",
              $value: "{salt.color.gray.70.fade.foreground}",
            },
          },
          separator: {
            $type: "color",
            $value: "{salt.color.white.fade.separatorOpacity.secondary}",
          },
        },
        backdrop: {
          $type: "color",
          $value: "{salt.color.black.fade.backdrop}",
        },
        tertiary: {
          background: {
            $type: "color",
            $value: {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
            },
            disabled: {
              $type: "color",
              $value: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
            readonly: {
              $type: "color",
              $value: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
          },
          border: {
            $type: "color",
            $value: {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
            },
            disabled: {
              $type: "color",
              $value: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
          },
          separator: {
            $type: "color",
            $value: "{salt.color.white.fade.separatorOpacity.tertiary}",
          },
        },
      },
      positive: {
        foreground: {
          $type: "color",
          $value: "{salt.color.green.300}",
        },
      },
    },
  },
};
