import style from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { useState } from 'react'


const ProductCard = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className={style.productCard}>
        <img className={style.productImg} src="./coffee-mug.png" alt="Coffee Mug" />
        {/* <img className={style.productImg} src={noImage} alt="Coffee Mug" /> */}
        <span className={style.productDescription}>Coffee Mug</span>

        <div className={ style.buttonsContainer}>

            <button className={style.buttonMinus}>-</button>
        
            <div className={style.countLabel}> { counter }</div>

            <button className={style.buttonAdd}> + </button>

        </div>
    </div>
  )
}

export default ProductCard