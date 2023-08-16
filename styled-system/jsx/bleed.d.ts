/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BleedProperties } from '../patterns/bleed'
import type { HTMLStyledProps } from '../types/jsx'

export type BleedProps = BleedProperties & Omit<HTMLStyledProps<'div'>, keyof BleedProperties >


export declare const Bleed: FunctionComponent<BleedProps>