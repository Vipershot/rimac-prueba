import React, { MouseEvent } from 'react';

export type IStyle = 'default' | 'transparent-open' | 'transparent-close' | 'transparent-default';

export interface PropsButton {
    onClick?:(event: MouseEvent<HTMLButtonElement>) => void,
    text?: string | any
    style?: IStyle
    disabled?: boolean
}