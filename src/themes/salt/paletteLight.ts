export const paletteLight = {
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
          blurSelected: {
            $type: "color",
            $value: "{salt.color.gray.30}",
          },
          hover: {
            $type: "color",
            $value: "{salt.color.blue.10}",
          },
          active: {
            $type: "color",
            $value: "{salt.color.blue.30}",
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
          $value: "{salt.color.gray.200}",
          active: {
            $type: "color",
            $value: "{salt.color.blue.600}",
          },
          activeDisabled: {
            $type: "color",
            $value: "{salt.color.blue.600.fade.fill}",
          },
          disabled: {
            $type: "color",
            $value: "{salt.color.gray.200.fade.border}",
          },
          hover: {
            $type: "color",
            $value: "{salt.color.blue.500}",
          },
          readonly: {
            $type: "color",
            $value: "{salt.color.gray.200.fade.border.readonly}",
          },
        },
        foreground: {
          $type: "color",
          $value: "{salt.color.gray.900}",
          disabled: {
            $type: "color",
            $value: "{salt.color.gray.900.fade.foreground}",
          },
          partial: {
            $type: "color",
            $value: "{salt.color.blue.600}",
          },
          partialDisabled: {
            $type: "color",
            $value: "{salt.color.blue.600.fade.foreground}",
          },
        },
        outline: {
          $type: "color",
          $value: "{salt.color.blue.600}",
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
            $value: "{salt.color.gray.60}",
            active: {
              $type: "color",
              $value: "{salt.color.gray.200}",
            },
            activeDisabled: {
              $type: "color",
              $value: "{salt.color.gray.200.fade.background}",
            },
            disabled: {
              $type: "color",
              $value: "{salt.color.gray.60.fade.background}",
            },
            hover: {
              $type: "color",
              $value: "{salt.color.gray.40}",
            },
          },
          foreground: {
            $type: "color",
            $value: "{salt.color.gray.900}",
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
              $value: "{salt.color.gray.900.fade.foreground}",
            },
            hover: {
              $type: "color",
              $value: "{salt.color.gray.900}",
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
              $value: "{salt.color.gray.200}",
            },
            activeDisabled: {
              $type: "color",
              $value: "{salt.color.gray.200.fade.background}",
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
              $value: "{salt.color.gray.40}",
            },
          },
          foreground: {
            $type: "color",
            $value: "{salt.color.gray.900}",
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
              $value: "{salt.color.gray.900.fade.foreground}",
            },
            hover: {
              $type: "color",
              $value: "{salt.color.gray.900}",
            },
          },
        },
      },
      error: {
        background: {
          emphasize: {
            $type: "color",
            $value: "{salt.color.red.10}",
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
            $value: "{salt.color.blue.10}",
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
            $value: "{salt.color.green.10}",
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
            $value: "{salt.color.orange.10}",
          },
        },
        border: {
          $type: "color",
          $value: "{salt.color.orange.700}",
        },
        foreground: {
          $type: "color",
          $value: "{salt.color.orange.700}",
        },
      },
      measured: {
        fill: {
          $type: "color",
          $value: "{salt.color.blue.500}",
          disabled: {
            $type: "color",
            $value: "{salt.color.blue.500.fade.fill}",
          },
        },
        foreground: {
          $type: "color",
          $value: "{salt.color.gray.90}",
          active: {
            $type: "color",
            $value: "{salt.color.blue.500}",
          },
          disabled: {
            $type: "color",
            $value: "{salt.color.gray.90.fade.foreground}",
          },
          activeDisabled: {
            $type: "color",
            $value: "{salt.color.blue.500.fade.fill}",
          },
        },
        background: {
          $type: "color",
          $value: "{salt.color.gray.60}",
          disabled: {
            $type: "color",
            $value: "{salt.color.gray.60.fade.background}",
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
              $value: "{salt.color.gray.20}",
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
              $value: "{salt.color.gray.30}",
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
              $value: "{salt.color.gray.20}",
            },
          },
        },
        foreground: {
          hover: {
            $type: "color",
            $value: "{salt.color.blue.600}",
          },
          active: {
            $type: "color",
            $value: "{salt.color.blue.700}",
          },
          visited: {
            $type: "color",
            $value: "{salt.color.purple.800}",
          },
        },
        indicator: {
          hover: {
            $type: "color",
            $value: "{salt.color.gray.90}",
          },
          active: {
            $type: "color",
            $value: "{salt.color.orange.600}",
          },
          activeDisabled: {
            $type: "color",
            $value: "{salt.color.orange.600.fade.border}",
          },
        },
      },
      negative: {
        foreground: {
          $type: "color",
          $value: "{salt.color.red.700}",
        },
      },
      neutral: {
        primary: {
          background: {
            $type: "color",
            $value: "{salt.color.white}",
            disabled: {
              $type: "color",
              $value: "{salt.color.white.fade.background}",
            },
            readonly: {
              $type: "color",
              $value: "{salt.color.white.fade.background.readonly}",
            },
          },
          foreground: {
            $type: "color",
            $value: "{salt.color.gray.900}",
            disabled: {
              $type: "color",
              $value: "{salt.color.gray.900.fade.foreground}",
            },
          },
          separator: {
            $type: "color",
            $value: "{salt.color.black.fade.separatorOpacity.primary}",
          },
          border: {
            $type: "color",
            $value: "{salt.color.gray.60}",
            disabled: {
              $type: "color",
              $value: "{salt.color.gray.60.fade.border}",
            },
          },
        },
        secondary: {
          background: {
            $type: "color",
            $value: "{salt.color.gray.20}",
            disabled: {
              $type: "color",
              $value: "{salt.color.gray.20.fade.background}",
            },
            readonly: {
              $type: "color",
              $value: "{salt.color.gray.20.fade.background.readonly}",
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
            $value: "{salt.color.gray.200}",
            disabled: {
              $type: "color",
              $value: "{salt.color.gray.200.fade.foreground}",
            },
          },
          separator: {
            $type: "color",
            $value: "{salt.color.black.fade.separatorOpacity.secondary}",
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
            $value: "{salt.color.black.fade.separatorOpacity.tertiary}",
          },
        },
      },
      positive: {
        foreground: {
          $type: "color",
          $value: "{salt.color.green.700}",
        },
      },
    },
  },
};
