import { defineConfig } from "@pandacss/dev";
import { tokens } from "./core-tokens";
import { semanticTokens } from "./semantic-tokens";

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
    redTheme: "[data-theme=red] &",
    blueTheme: "[data-theme=blue] &",
    greenTheme: "[data-theme=green] &",
    orangeTheme: "[data-theme=orange] &",
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
      semanticTokens,
    },
  },

  utilities: {
    extend: {
      bgt: {
        className: "bg-transparentize",
        transform(value, { token }) {
          const lastIndex = value?.lastIndexOf("/");
          if (!lastIndex) return {};

          if (typeof value?.substring !== "function") return {};

          const color = value?.substring(0, lastIndex);

          if (!color) return {};

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
