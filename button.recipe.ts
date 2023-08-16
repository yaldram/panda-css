import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  jsx: ["Button"],
  className: "button-size",
  description: "The styles for the Button component sizes",
  variants: {
    size: {
      xs: {
        height: "1.5rem",
        minWidth: "1.5rem",
        fontSize: "0.75rem",
        paddingX: "0.8rem",
      },
      sm: {
        height: "2rem",
        minWidth: "2rem",
        fontSize: "0.875rem",
        paddingX: "1rem",
      },
      md: {
        height: "2.5rem",
        minWidth: "2.5rem",
        fontSize: "1rem",
        paddingX: "1.25rem",
      },
      lg: {
        height: "3rem",
        minWidth: "3rem",
        fontSize: "1.125rem",
        paddingX: "1.5rem",
      },
    },
  },
  defaultVariants: {
    size: "lg",
  },
});
