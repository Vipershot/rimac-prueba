export type IType = 'email' | 'text' | 'checkbox' | 'password' | 'number';
export type IStyle = 'main' | 'select' | 'check' ;


export interface PropsInput {
    style: IStyle
    type: IType,
    placeHolder?: string,
    name?: string,
    value?: string,
    id?: string
}