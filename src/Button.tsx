import { cva } from "../styled-system/css";
import { styled } from "../styled-system/jsx";

const buttonWithVariant = cva({
  base: {
    border: "none",
    outline: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    paddingX: "0.25em",
    paddingY: "0.75em",
    textAlign: "center",
    lineHeight: "1.1",
    transition: "all 220ms ease-in-out",
    borderRadius: "0.375rem",
    height: "2.5rem",
    minWidth: "2.5rem",
    fontSize: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",

    _hover: {
      backgroundColor: "transparent",
      backgroundImage: "initial",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none",
    },
  },

  variants: {
    colorScheme: {
      primary: {},
    },
    varaint: {
      solid: {},
      outline: {},
    },
  },

  compoundVariants: [
    {
      colorScheme: "primary",
      varaint: "solid",
      css: {
        bg: "primary",
        color: "primary.foreground",
        _hover: {
          bgt: "primary/10",
        },
      },
    },

    {
      colorScheme: "primary",
      varaint: "outline",
      css: {
        bg: "transparent",
        color: "primary",
        _hover: {
          bgt: "primary/90",
        },
        border: "2px solid",
        borderColor: "primary",
      },
    },
  ],

  defaultVariants: {
    colorScheme: "primary",
    varaint: "solid",
  },
});

export const Button = styled("button", buttonWithVariant);
