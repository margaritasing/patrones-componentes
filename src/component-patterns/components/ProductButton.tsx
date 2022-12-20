import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import style from '../styles/styles.module.css';



export const ProductButton = () => {

    const { increaseBy, counter } = useContext(ProductContext)
  
    return (
      <div className={ style.buttonsContainer}>
  
        <button className={style.buttonMinus}
        onClick={() => increaseBy(-1)}>-</button>
  
        <div className={style.countLabel}> { counter }</div>
  
        <button onClick={() => increaseBy(+1)} className={style.buttonAdd}> + </button>
  
    </div>
  
    )
  }
  