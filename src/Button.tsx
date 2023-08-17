import { RecipeVariantProps, cva, cx } from "../styled-system/css";
import { ButtonSizesVariantProps, buttonSizes } from "../styled-system/recipes";

const buttonStyleWithVariants = cva({
  base: {
    appearance: "none",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "0.625rem",
    userSelect: "none",
    textAlign: "center",
    whiteSpace: "nowrap",
    border: "none",
    cursor: "pointer",
    transition: "all 250ms ease-in",
    borderWidth: "2px",
    _active: {
      transform: "scale(.97)",
    },
  },

  variants: {
    colorScheme: {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
    },
    variant: {
      solid: {},
      bordered: {
        backgroundColor: "transparent",
        borderWidth: "2px",
        borderStyle: "solid",
      },
      ghost: {
        backgroundColor: "transparent",
        borderWidth: "2px",
        borderStyle: "solid",
      },
      flat: {},
    },
    isShadow: {
      true: {},
    },
  },

  compoundVariants: [
    {
      colorScheme: "primary",
      variant: "solid",
      css: {
        bg: "primary",
        color: "white",
      },
    },
    {
      colorScheme: "secondary",
      variant: "solid",
      css: {
        bg: "secondary",
        color: "white",
      },
    },
    {
      colorScheme: "success",
      variant: "solid",
      css: {
        bg: "success",
        color: "black",
      },
    },
    {
      colorScheme: "warning",
      variant: "solid",
      css: {
        bg: "warning",
        color: "black",
      },
    },
    {
      colorScheme: "error",
      variant: "solid",
      css: {
        bg: "error",
        color: "white",
      },
    },

    {
      colorScheme: "primary",
      isShadow: true,
      css: {
        boxShadow: "primary",
      },
    },
    {
      colorScheme: "secondary",
      isShadow: true,
      css: {
        boxShadow: "secondary",
      },
    },
    {
      colorScheme: "warning",
      isShadow: true,
      css: {
        boxShadow: "warning",
      },
    },
    {
      colorScheme: "success",
      isShadow: true,
      css: {
        boxShadow: "success",
      },
    },
    {
      colorScheme: "error",
      isShadow: true,
      css: {
        boxShadow: "error",
      },
    },

    {
      colorScheme: "primary",
      variant: "bordered",
      css: {
        color: "primary",
        borderWidth: "2px",
        borderColor: "primary",
      },
    },
    {
      colorScheme: "secondary",
      variant: "bordered",
      css: {
        color: "secondary",
        borderWidth: "2px",
        borderColor: "secondary",
      },
    },
    {
      colorScheme: "warning",
      variant: "bordered",
      css: {
        color: "warning",
        borderWidth: "2px",
        borderColor: "warning",
      },
    },
    {
      colorScheme: "success",
      variant: "bordered",
      css: {
        color: "success",
        borderWidth: "2px",
        borderColor: "success",
      },
    },
    {
      colorScheme: "error",
      variant: "bordered",
      css: {
        color: "error",
        borderWidth: "2px",
        borderColor: "error",
      },
    },
    {
      colorScheme: "primary",
      variant: "ghost",
      css: {
        color: "primary",
        borderWidth: "2px",
        borderColor: "primary",
        _hover: {
          bg: "primary",
          color: "white",
        },
      },
    },
    {
      colorScheme: "secondary",
      variant: "ghost",
      css: {
        color: "secondary",
        borderWidth: "2px",
        borderColor: "secondary",
        _hover: {
          bg: "secondary",
          color: "white",
        },
      },
    },
    {
      colorScheme: "warning",
      variant: "ghost",
      css: {
        color: "warning",
        borderWidth: "2px",
        borderColor: "warning",
        _hover: {
          bg: "warning",
          color: "black",
        },
      },
    },
    {
      colorScheme: "success",
      variant: "ghost",
      css: {
        color: "success",
        borderWidth: "2px",
        borderColor: "success",
        _hover: {
          bg: "success",
          color: "black",
        },
      },
    },
    {
      colorScheme: "error",
      variant: "ghost",
      css: {
        color: "error",
        borderWidth: "2px",
        borderColor: "error",
        _hover: {
          bg: "error",
          color: "white",
        },
      },
    },

    {
      colorScheme: "primary",
      variant: "flat",
      css: {
        bg: "primary.light",
        color: "primary.lightContrast",
        _hover: {
          bg: "primary.lightHover",
        },
        _active: {
          bg: "primary.lightActive",
        },
      },
    },
    {
      colorScheme: "secondary",
      variant: "flat",
      css: {
        bg: "secondary.light",
        color: "secondary.lightContrast",
        _hover: {
          bg: "secondary.lightHover",
        },
        _active: {
          bg: "secondary.lightActive",
        },
      },
    },
    {
      colorScheme: "warning",
      variant: "flat",
      css: {
        bg: "warning.light",
        color: "warning.lightContrast",
        _hover: {
          bg: "warning.lightHover",
        },
        _active: {
          bg: "warning.lightActive",
        },
      },
    },
    {
      colorScheme: "success",
      variant: "flat",
      css: {
        bg: "success.light",
        color: "success.lightContrast",
        _hover: {
          bg: "success.lightHover",
        },
        _active: {
          bg: "success.lightActive",
        },
      },
    },
    {
      colorScheme: "error",
      variant: "flat",
      css: {
        bg: "error.light",
        color: "error.lightContrast",
        _hover: {
          bg: "error.lightHover",
        },
        _active: {
          bg: "error.lightActive",
        },
      },
    },
  ],
  defaultVariants: {
    colorScheme: "primary",
    variant: "solid",
  },
});

export type ButtonProps = RecipeVariantProps<typeof buttonStyleWithVariants> &
  ButtonSizesVariantProps &
  React.ComponentPropsWithoutRef<"button">;

export function Button(props: ButtonProps) {
  const { colorScheme, variant, isShadow, size, ...delegated } = props;

  const classes = cx(
    buttonStyleWithVariants({ colorScheme, variant, isShadow }),
    buttonSizes({ size })
  );

  return <button className={classes} {...delegated} />;
}
