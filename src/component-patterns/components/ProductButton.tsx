import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import style from '../styles/styles.module.css';

export interface Props {
  className?: string
}


export const ProductButton = ({className}: Props) => {

  const { increaseBy, counter } = useContext(ProductContext)
  
  return (
    <div className={ `${style.buttonsContainer}  ${className}`}>
  
        <button className={style.buttonMinus}
        onClick={() => increaseBy(-1)}>-</button>
  
        <div className={style.countLabel}> { counter }</div>
  
        <button onClick={() => increaseBy(+1)} className={style.buttonAdd}> + </button>
  
    </div>
  
  )
}
  