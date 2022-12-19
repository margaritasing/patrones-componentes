import style from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { useState } from 'react'


const ProductCard = () => {

  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter(prev => Math.max(prev + value, 0 ))
  }

  return (
    <div className={style.productCard}>
        <img className={style.productImg} src="./coffee-mug.png" alt="Coffee Mug" />
        {/* <img className={style.productImg} src={noImage} alt="Coffee Mug" /> */}
        <span className={style.productDescription}>Coffee Mug</span>

        <div className={ style.buttonsContainer}>

            <button className={style.buttonMinus}
            onClick={() => increaseBy(-1)}>-</button>
        
            <div className={style.countLabel}> { counter }</div>

            <button onClick={() => increaseBy(+1)} className={style.buttonAdd}> + </button>

        </div>
    </div>
  )
}

export default ProductCard