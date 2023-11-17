export type ISize = 'xs' | 'sm' | 'md' | 'lg';
export type ICategory = 'h1' | 'p';
export type IColor = 'primary' | 'secondary' | 'terteary' | 'gray';
export type IWeight = 'light' | 'bold' ;

export interface PropsTextMain {
    size: ISize
    category: ICategory
    color: IColor
    weight: IWeight
    text: string
}