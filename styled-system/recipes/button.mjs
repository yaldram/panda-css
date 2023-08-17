import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const buttonFn = createRecipe('button', {}, [])

export const button = Object.assign(buttonFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [
  "size"
],
  variantMap: {
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, [
  "size"
])
  },
})