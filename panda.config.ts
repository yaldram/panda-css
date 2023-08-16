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

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        buttonSizes: buttonRecipe,
      },
    },
  },

  utilities: {
    extend: {
      bgt: {
        className: "transparent_bg",
        transform(value, { token }) {
          const lastIndex = value?.lastIndexOf("/");
          if (!lastIndex) {
            return {};
          }
          if (typeof value?.substring !== "function") {
            return {};
          }
          const color = value?.substring(0, lastIndex);
          if (!color) {
            return {};
          }
          const amount = value.split("/").at(-1);
          const colorValue = token(`colors.${color}`);

          const amountValue = token(`opacity.${amount}`)
            ? token(`opacity.${amount}`) * 100
            : `${amount}%`;

          return {
            backgroundColor: `color-mix(in srgb, transparent ${amountValue}, ${colorValue})`,
          };
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
