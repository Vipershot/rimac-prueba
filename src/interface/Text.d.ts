export type ISize = 'xs' | 'sm' | 'md';
export type ICategory = 'h1' | 'p';
export type IColor = 'primary' | 'secondary' | 'terteary';
export type IWeight = 'light' | 'bold' ;

export interface PropsTextMain {
    size: ISize
    category: ICategory
    color: IColor
    weight: IWeight
    text: string
}