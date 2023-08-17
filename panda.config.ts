import { defineConfig } from "@pandacss/dev";
import { buttonRecipe } from "./button.recipe";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        dark: {
          blue: {
            50: { value: "#10253E" },
            100: { value: "#102C4C" },
            200: { value: "#0F3158" },
            300: { value: "#0D3868" },
            400: { value: "#0A4281" },
            500: { value: "#0952A5" },
            600: { value: "#0072F5" },
            700: { value: "#3694FF" },
            800: { value: "#3694FF" },
            900: { value: "#EAF4FF" },
          },
          cyan: {
            50: { value: "#012A32" },
            100: { value: "#023A46" },
            200: { value: "#024B5A" },
            300: { value: "#036072" },
            400: { value: "#037086" },
            500: { value: "#048EA9" },
            600: { value: "#06B7DB" },
            700: { value: "#33D9FA" },
            800: { value: "#6FE4FB" },
            900: { value: "#EBFBFE" },
          },
          gray: {
            50: { value: "#16181A" },
            100: { value: "#26292B" },
            200: { value: "#2B2F31" },
            300: { value: "#313538" },
            400: { value: "#3A3F42" },
            500: { value: "#4C5155" },
            600: { value: "#697177" },
            700: { value: "#787F85" },
            800: { value: "#9BA1A6" },
            900: { value: "#ECEDEE" },
          },
          green: {
            50: { value: "#042F14" },
            100: { value: "#06381B" },
            200: { value: "#074A24" },
            300: { value: "#0A6130" },
            400: { value: "#0B7439" },
            500: { value: "#0F9549" },
            600: { value: "#17C964" },
            700: { value: "#41EC8B" },
            800: { value: "#78F2AD" },
            900: { value: "#ECFDF4" },
          },
          pink: {
            50: { value: "#330025" },
            100: { value: "#470033" },
            200: { value: "#5C0042" },
            300: { value: "#750054" },
            400: { value: "#8A0063" },
            500: { value: "#AD007C" },
            600: { value: "#FF4ECD" },
            700: { value: "#FF2EC4" },
            800: { value: "#FF6BD5" },
            900: { value: "#FFEBF9" },
          },
          purple: {
            50: { value: "#1F0A33" },
            100: { value: "#240C3C" },
            200: { value: "#2E0F4D" },
            300: { value: "#3B1362" },
            400: { value: "#451773" },
            500: { value: "#571D91" },
            600: { value: "#7828C8" },
            700: { value: "#9750DD" },
            800: { value: "#B583E7" },
            900: { value: "#F7ECFC" },
          },
          red: {
            50: { value: "#300313" },
            100: { value: "#300313" },
            200: { value: "#44041A" },
            300: { value: "#5C0523" },
            400: { value: "#6F062B" },
            500: { value: "#910838" },
            600: { value: "#F31260" },
            700: { value: "#F4256D" },
            800: { value: "#F75F94" },
            900: { value: "#FDD8E5" },
          },
          yellow: {
            50: { value: "#3A2503" },
            100: { value: "#442B03" },
            200: { value: "#583804" },
            300: { value: "#704705" },
            400: { value: "#845306" },
            500: { value: "#A66908" },
            600: { value: "#F5A524" },
            700: { value: "#F6AD37" },
            800: { value: "#F8C572" },
            900: { value: "#FEF7EC" },
          },
        },

        blue: {
          50: { value: "#EDF5FF" },
          100: { value: "#E1EFFF" },
          200: { value: "#CEE4FE" },
          300: { value: "#B7D5F8" },
          400: { value: "#96C1F2" },
          500: { value: "#5EA2EF" },
          600: { value: "#0072F5" },
          700: { value: "#005FCC" },
          800: { value: "#004799" },
          900: { value: "#00254D" },
        },
        cyan: {
          50: { value: "#F0FCFF" },
          100: { value: "#E6FAFE" },
          200: { value: "#D7F8FE" },
          300: { value: "#C3F4FD" },
          400: { value: "#A5EEFD" },
          500: { value: "#7EE7FC" },
          600: { value: "#06B7DB" },
          700: { value: "#09AACD" },
          800: { value: "#0E8AAA" },
          900: { value: "#053B48" },
        },
        gray: {
          50: { value: "#F1F3F5" },
          100: { value: "#ECEEF0" },
          200: { value: "#E6E8EB" },
          300: { value: "#DFE3E6" },
          400: { value: "#D7DBDF" },
          500: { value: "#C1C8CD" },
          600: { value: "#889096" },
          700: { value: "#7E868C" },
          800: { value: "#687076" },
          900: { value: "#11181C" },
        },
        green: {
          50: { value: "#F1FDF7" },
          100: { value: "#E8FCF1" },
          200: { value: "#DAFBE8" },
          300: { value: "#C8F9DD" },
          400: { value: "#ADF5CC" },
          500: { value: "#88F1B6" },
          600: { value: "#17C964" },
          700: { value: "#13A452" },
          800: { value: "#108944" },
          900: { value: "#06371B" },
        },
        pink: {
          50: { value: "#FFF0FB" },
          100: { value: "#FFE5F8" },
          200: { value: "#FFD6F3" },
          300: { value: "#FFC2EE" },
          400: { value: "#FFA3E5" },
          500: { value: "#FF7AD9" },
          600: { value: "#FF4ECD" },
          700: { value: "#D6009A" },
          800: { value: "#B80084" },
          900: { value: "#4D0037" },
        },
        purple: {
          50: { value: "#F7F2FD" },
          100: { value: "#F1E8FB" },
          200: { value: "#EADCF8" },
          300: { value: "#E0CBF5" },
          400: { value: "#D1B1F0" },
          500: { value: "#BC8EE9" },
          600: { value: "#7828C8" },
          700: { value: "#6622AA" },
          800: { value: "#4D1980" },
          900: { value: "#290E44" },
        },
        red: {
          50: { value: "#FEF0F5" },
          100: { value: "#FEE7EF" },
          200: { value: "#FDD8E5" },
          300: { value: "#FCC5D8" },
          400: { value: "#FAA8C5" },
          500: { value: "#F881AB" },
          600: { value: "#F31260" },
          700: { value: "#B80A47" },
          800: { value: "#910838" },
          900: { value: "#4E041E" },
        },
        yellow: {
          50: { value: "#FEF9F0" },
          100: { value: "#FEF5E7" },
          200: { value: "#FDEFD8" },
          300: { value: "#FCE7C5" },
          400: { value: "#FBDBA7" },
          500: { value: "#F9CB80" },
          600: { value: "#F5A524" },
          700: { value: "#B97509" },
          800: { value: "#925D07" },
          900: { value: "#4E3104" },
        },
      },
    },

    semanticTokens: {
      shadows: {
        primary: {
          value: {
            base: "0 4px 14px 0 {colors.blue.500}",
            _dark: "0 4px 14px 0 {colors.dark.blue.500}",
          },
        },
        secondary: {
          value: {
            base: "0 4px 14px 0 {colors.purple.500}",
            _dark: "0 4px 14px 0 {colors.dark.purple.500}",
          },
        },
        success: {
          value: {
            base: "0 4px 14px 0 {colors.green.500}",
            _dark: "0 4px 14px 0 {colors.dark.green.500}",
          },
        },
        warning: {
          value: {
            base: "0 4px 14px 0 {colors.yellow.500}",
            _dark: "0 4px 14px 0 {colors.dark.yellow.500}",
          },
        },
        error: {
          value: {
            base: "0 4px 14px 0 {colors.red.500}",
            _dark: "0 4px 14px 0 {colors.dark.red.500}",
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: {
            value: {
              base: "{colors.blue.600}",
              _dark: "{colors.dark.blue.600}",
            },
          },
          light: {
            value: {
              base: "{colors.blue.200}",
              _dark: "{colors.dark.blue.200}",
            },
          },
          lightHover: {
            value: {
              base: "{colors.blue.300}",
              _dark: "{colors.dark.blue.300}",
            },
          },
          lightActive: {
            value: {
              base: "{colors.blue.400}",
              _dark: "{colors.dark.blue.400}",
            },
          },
          lightContrast: {
            value: {
              base: "{colors.blue.600}",
              _dark: "{colors.dark.blue.600}",
            },
          },
          border: {
            value: {
              base: "{colors.blue.500}",
              _dark: "{colors.dark.blue.500}",
            },
          },
          borderHover: {
            value: {
              base: "{colors.blue.600}",
              _dark: "{colors.dark.blue.600}",
            },
          },
          solidHover: {
            value: {
              base: "{colors.blue.700}",
              _dark: "{colors.dark.blue.700}",
            },
          },
          solidContrast: {
            value: {
              base: "{colors.white}",
              _dark: "{colors.dark.white}",
            },
          },
          shadow: {
            value: {
              base: "{colors.blue.500}",
              _dark: "{colors.dark.blue.500}",
            },
          },
        },

        secondary: {
          DEFAULT: {
            value: {
              base: "{colors.purple.600}",
              _dark: "{colors.dark.purple.600}",
            },
          },
          light: {
            value: {
              base: "{colors.purple.200}",
              _dark: "{colors.dark.purple.200}",
            },
          },
          lightHover: {
            value: {
              base: "{colors.purple.300}",
              _dark: "{colors.dark.purple.300}",
            },
          },
          lightActive: {
            value: {
              base: "{colors.purple.400}",
              _dark: "{colors.dark.purple.400}",
            },
          },
          lightContrast: {
            value: {
              base: "{colors.purple.600}",
              _dark: "{colors.dark.purple.600}",
            },
          },
          border: {
            value: {
              base: "{colors.purple.500}",
              _dark: "{colors.dark.purple.500}",
            },
          },
          borderHover: {
            value: {
              base: "{colors.purple.600}",
              _dark: "{colors.dark.purple.600}",
            },
          },
          solidHover: {
            value: {
              base: "{colors.purple.700}",
              _dark: "{colors.dark.purple.700}",
            },
          },
          solidContrast: {
            value: {
              base: "{colors.white}",
              _dark: "{colors.dark.white}",
            },
          },
          shadow: {
            value: {
              base: "{colors.purple.500}",
              _dark: "{colors.dark.purple.500}",
            },
          },
        },

        success: {
          DEFAULT: {
            value: {
              base: "{colors.green.600}",
              _dark: "{colors.dark.green.600}",
            },
          },
          light: {
            value: {
              base: "{colors.green.200}",
              _dark: "{colors.dark.green.200}",
            },
          },
          lightHover: {
            value: {
              base: "{colors.green.300}",
              _dark: "{colors.dark.green.300}",
            },
          },
          lightActive: {
            value: {
              base: "{colors.green.400}",
              _dark: "{colors.dark.green.400}",
            },
          },
          lightContrast: {
            value: {
              base: "{colors.green.700}",
              _dark: "{colors.dark.green.700}",
            },
          },
          border: {
            value: {
              base: "{colors.green.500}",
              _dark: "{colors.dark.green.500}",
            },
          },
          borderHover: {
            value: {
              base: "{colors.green.600}",
              _dark: "{colors.dark.green.600}",
            },
          },
          solidHover: {
            value: {
              base: "{colors.green.700}",
              _dark: "{colors.dark.green.700}",
            },
          },
          solidContrast: {
            value: {
              base: "{colors.white}",
              _dark: "{colors.dark.white}",
            },
          },
          shadow: {
            value: {
              base: "{colors.green.500}",
              _dark: "{colors.dark.green.500}",
            },
          },
        },

        warning: {
          DEFAULT: {
            value: {
              base: "{colors.yellow.600}",
              _dark: "{colors.dark.yellow.600}",
            },
          },
          light: {
            value: {
              base: "{colors.yellow.200}",
              _dark: "{colors.dark.yellow.200}",
            },
          },
          lightHover: {
            value: {
              base: "{colors.yellow.300}",
              _dark: "{colors.dark.yellow.300}",
            },
          },
          lightActive: {
            value: {
              base: "{colors.yellow.400}",
              _dark: "{colors.dark.yellow.400}",
            },
          },
          lightContrast: {
            value: {
              base: "{colors.yellow.700}",
              _dark: "{colors.dark.yellow.700}",
            },
          },
          border: {
            value: {
              base: "{colors.yellow.500}",
              _dark: "{colors.dark.yellow.500}",
            },
          },
          borderHover: {
            value: {
              base: "{colors.yellow.600}",
              _dark: "{colors.dark.yellow.600}",
            },
          },
          solidHover: {
            value: {
              base: "{colors.yellow.700}",
              _dark: "{colors.dark.yellow.700}",
            },
          },
          solidContrast: {
            value: {
              base: "{colors.white}",
              _dark: "{colors.dark.white}",
            },
          },
          shadow: {
            value: {
              base: "{colors.yellow.500}",
              _dark: "{colors.dark.yellow.500}",
            },
          },
        },

        error: {
          DEFAULT: {
            value: {
              base: "{colors.red.600}",
              _dark: "{colors.dark.red.600}",
            },
          },
          light: {
            value: {
              base: "{colors.red.200}",
              _dark: "{colors.dark.red.200}",
            },
          },
          lightHover: {
            value: {
              base: "{colors.red.300}",
              _dark: "{colors.dark.red.300}",
            },
          },
          lightActive: {
            value: {
              base: "{colors.red.400}",
              _dark: "{colors.dark.red.400}",
            },
          },
          lightContrast: {
            value: {
              base: "{colors.red.600}",
              _dark: "{colors.dark.red.600}",
            },
          },
          border: {
            value: {
              base: "{colors.red.500}",
              _dark: "{colors.dark.red.500}",
            },
          },
          borderHover: {
            value: {
              base: "{colors.red.600}",
              _dark: "{colors.dark.red.600}",
            },
          },
          solidHover: {
            value: {
              base: "{colors.red.700}",
              _dark: "{colors.dark.red.700}",
            },
          },
          solidContrast: {
            value: {
              base: "{colors.white}",
              _dark: "{colors.dark.white}",
            },
          },
          shadow: {
            value: {
              base: "{colors.red.500}",
              _dark: "{colors.dark.red.500}",
            },
          },
        },
      },
    },

    extend: {
      recipes: {
        buttonSizes: buttonRecipe,
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
