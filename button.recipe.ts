import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button-size",
  description: "The styles for the Button component",
  jsx: ["Button"],
  variants: {
    size: {
      xs: {
        borderRadius: "7px",
        height: "1.5rem",
        paddingLeft: "0.375rem",
        paddingRight: "0.375rem",
        lineHeight: "1.5rem",
        minWidth: "5rem",
        fontSize: "0.75rem",
      },
      sm: {
        borderRadius: "9px",
        height: "2rem",
        paddingLeft: "0.625rem",
        paddingRight: "0.625rem",
        lineHeight: "2.5rem",
        minWidth: "9rem",
        fontSize: "0.875rem",
      },
      md: {
        borderRadius: "12px",
        height: "2.5rem",
        paddingLeft: "0.875rem",
        paddingRight: "0.875rem",
        lineHeight: "2.5rem",
        minWidth: "12rem",
        fontSize: "0.875rem",
      },
      lg: {
        borderRadius: "14px",
        height: "2.75rem",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        lineHeight: "2.75rem",
        minWidth: "15rem",
        fontSize: "1rem",
      },
      xl: {
        borderRadius: "16px",
        height: "3.5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        lineHeight: "3.5rem",
        minWidth: "18rem",
        fontSize: "1.125rem",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
