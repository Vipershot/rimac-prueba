import { ICategory, PropsTextMain } from '../../interface/Text'

export const TextMain = ({ size, category, color, weight, text }: PropsTextMain) => {
  const getCategory = (category: ICategory) => {
    switch (category) {
      case 'h1':
        return <h1 className={`text-${size} text-${color} text-${weight}`}>{text}</h1>

      case 'p':
        return <p className={`text-${size} text-${color} text-${weight}`}>{text}</p>

      default:
        break
    }
  }
  return <>{getCategory(category)}</>
}
