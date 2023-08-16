/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { VisuallyHiddenProperties } from '../patterns/visually-hidden'
import type { HTMLStyledProps } from '../types/jsx'

export type VisuallyHiddenProps = VisuallyHiddenProperties & Omit<HTMLStyledProps<'div'>, keyof VisuallyHiddenProperties >


export declare const VisuallyHidden: FunctionComponent<VisuallyHiddenProps>