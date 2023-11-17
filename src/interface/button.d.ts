import React, { MouseEvent } from 'react';

export interface PropsButton {
    onClick?:(event: MouseEvent<HTMLButtonElement>) => void,
    text?: string
}