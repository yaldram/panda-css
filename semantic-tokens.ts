import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    primary: {
      DEFAULT: {
        value: {
          _redTheme: {
            base: "hsl({colors.red.primary})",
            _dark: "hsl({colors.red.dark.primary})",
          },
          _blueTheme: {
            base: "hsl({colors.blue.primary})",
            _dark: "hsl({colors.blue.dark.primary})",
          },
          _greenTheme: {
            base: "hsl({colors.green.primary})",
            _dark: "hsl({colors.green.dark.primary})",
          },
          _orangeTheme: {
            base: "hsl({colors.orange.primary})",
            _dark: "hsl({colors.orange.dark.primary})",
          },
        },
      },
      foreground: {
        value: {
          _redTheme: {
            base: "hsl({colors.red.primaryForeground})",
            _dark: "hsl({colors.red.dark.primaryForeground})",
          },
          _blueTheme: {
            base: "hsl({colors.blue.primaryForeground})",
            _dark: "hsl({colors.blue.dark.primaryForeground})",
          },
          _greenTheme: {
            base: "hsl({colors.green.primaryForeground})",
            _dark: "hsl({colors.green.dark.primaryForeground})",
          },
          _orangeTheme: {
            base: "hsl({colors.orange.primaryForeground})",
            _dark: "hsl({colors.orange.dark.primaryForeground})",
          },
        },
      },
    },

    secondary: {
      DEFAULT: {
        value: {
          _redTheme: {
            base: "hsl({colors.red.secondary})",
            _dark: "hsl({colors.red.dark.secondary})",
          },
          _blueTheme: {
            base: "hsl({colors.blue.secondary})",
            _dark: "hsl({colors.blue.dark.secondary})",
          },
          _greenTheme: {
            base: "hsl({colors.green.secondary})",
            _dark: "hsl({colors.green.dark.secondary})",
          },
          _orangeTheme: {
            base: "hsl({colors.orange.secondary})",
            _dark: "hsl({colors.orange.dark.secondary})",
          },
        },
      },
      foreground: {
        value: {
          _redTheme: {
            base: "hsl({colors.red.secondaryForeground})",
            _dark: "hsl({colors.red.dark.secondaryForeground})",
          },
          _blueTheme: {
            base: "hsl({colors.blue.secondaryForeground})",
            _dark: "hsl({colors.blue.dark.secondaryForeground})",
          },
          _greenTheme: {
            base: "hsl({colors.green.secondaryForeground})",
            _dark: "hsl({colors.green.dark.secondaryForeground})",
          },
          _orangeTheme: {
            base: "hsl({colors.orange.secondaryForeground})",
            _dark: "hsl({colors.orange.dark.secondaryForeground})",
          },
        },
      },
    },
  },
});
