import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const buttonSizesFn = createRecipe('buttonSizes', {
  "size": "md"
}, [])

export const buttonSizes = Object.assign(buttonSizesFn, {
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