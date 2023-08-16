import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const buttonSizesFn = createRecipe('buttonSizes', {
  "size": "lg"
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
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, [
  "size"
])
  },
})