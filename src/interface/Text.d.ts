export type ISize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ICategory = 'h1' | 'p';
export type IColor = 'primary' | 'secondary' | 'terteary' | 'grey' | 'light-grey';
export type IWeight = 'light' | 'bold' ;

export interface PropsTextMain {
    size: ISize
    category: ICategory
    color: IColor
    weight: IWeight
    text: string | number
}