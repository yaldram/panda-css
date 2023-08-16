/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type ButtonSizesVariant = {
  size: "xs" | "sm" | "md" | "lg"
}

type ButtonSizesVariantMap = {
  [key in keyof ButtonSizesVariant]: Array<ButtonSizesVariant[key]>
}

export type ButtonSizesVariantProps = {
  [key in keyof ButtonSizesVariant]?: ConditionalValue<ButtonSizesVariant[key]>
}

interface ButtonSizesRecipe {
  __type: ButtonSizesVariantProps
  (props?: ButtonSizesVariantProps): string
  raw: (props?: ButtonSizesVariantProps) => ButtonSizesVariantProps
  variantMap: ButtonSizesVariantMap
  variantKeys: Array<keyof ButtonSizesVariant>
  splitVariantProps<Props extends ButtonSizesVariantProps>(props: Props): [ButtonSizesVariantProps, Pretty<Omit<Props, keyof ButtonSizesVariantProps>>]
}

/** The styles for the Button component sizes */
export declare const buttonSizes: ButtonSizesRecipe