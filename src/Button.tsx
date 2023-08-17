import { cva } from "../styled-system/css";
import { ButtonSizesVariantProps, buttonSizes } from "../styled-system/recipes";
import { styled } from "../styled-system/jsx";

const buttonWithVariant = cva({
  base: {
    border: "none",
    outline: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: "1.1",
    transition: "all 220ms ease-in-out",
    borderRadius: "0.375rem",

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
      red: {},
      orange: {},
      green: {},
    },
    variant: {
      solid: {},
      outline: {},
    },
  },

  compoundVariants: [
    {
      colorScheme: "green",
      variant: "solid",
      css: {
        bg: "green.500",
        color: "white",
        _hover: {
          bg: "green.600",
          _disabled: {
            bg: "green.500",
          },
        },
        _active: {
          bg: "green.700",
        },

        _dark: {
          bg: "green.200",
          color: "gray.800",
          _hover: {
            bg: "green.300",
            _disabled: {
              bg: "green.200",
            },
          },
          _active: {
            bg: "green.400",
          },
        },
      },
    },
    {
      colorScheme: "red",
      variant: "solid",
      css: {
        bg: "red.500",
        color: "white",
        _hover: {
          bg: "red.600",
          _disabled: {
            bg: "red.500",
          },
        },
        _active: {
          bg: "red.700",
        },

        _dark: {
          bg: "red.200",
          color: "gray.800",
          _hover: {
            bg: "red.300",
            _disabled: {
              bg: "red.200",
            },
          },
          _active: {
            bg: "red.400",
          },
          _disabled: {
            bg: "red.200",
          },
        },
      },
    },
    {
      colorScheme: "orange",
      variant: "solid",
      css: {
        bg: "orange.500",
        color: "white",
        _hover: {
          bg: "orange.600",
          _disabled: {
            bg: "orange.500",
          },
        },
        _active: {
          bg: "orange.700",
        },

        _dark: {
          bg: "orange.200",
          color: "gray.800",
          _hover: {
            bg: "orange.300",
            _disabled: {
              bg: "orange.200",
            },
          },
          _active: {
            bg: "orange.400",
          },
          _disabled: {
            bg: "orange.200",
          },
        },
      },
    },

    {
      colorScheme: "green",
      variant: "outline",
      css: {
        color: "green.600",
        _dark: {
          color: "green.200",
        },
        bg: "transparent",
        borderStyle: "solid",
        borderColor: "currentColor",
        borderWidth: "1px",
        _hover: {
          bg: "green.50",
          _dark: {
            bgt: "red.200/90",
          },
        },
        _active: {
          bg: "green.100",
          _dark: {
            bgt: "green.200/80",
          },
        },
      },
    },

    {
      colorScheme: "red",
      variant: "outline",
      css: {
        color: "red.600",
        _dark: {
          color: "red.200",
        },
        bg: "transparent",
        borderStyle: "solid",
        borderColor: "currentColor",
        borderWidth: "1px",
        _hover: {
          bg: "red.50",
          _dark: {
            bgt: "red.200/90",
          },
        },
        _active: {
          bg: "red.100",
          _dark: {
            bgt: "red.200/80",
          },
        },
      },
    },

    {
      colorScheme: "orange",
      variant: "outline",
      css: {
        color: "orange.600",
        _dark: {
          color: "orange.200",
        },
        bg: "transparent",
        borderStyle: "solid",
        borderColor: "currentColor",
        borderWidth: "1px",
        _hover: {
          bg: "orange.50",
          _dark: {
            bgt: "orange.200/90",
          },
        },
        _active: {
          bg: "orange.100",
          _dark: {
            bgt: "orange.200/80",
          },
        },
      },
    },
  ],

  defaultVariants: {
    colorScheme: "green",
    variant: "solid",
  },
});

const StyledButton = styled("button", buttonWithVariant);

export type ButtonProps = ButtonSizesVariantProps &
  React.ComponentProps<typeof StyledButton>;

export function Button(props: ButtonProps) {
  const { colorScheme, variant, size, ...delegated } = props;

  return (
    <StyledButton
      className={buttonSizes({ size })}
      colorScheme={colorScheme}
      variant={variant}
      {...delegated}
    />
  );
}
