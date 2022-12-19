import { useProduct } from '../hooks/useProduct'
import style from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

interface Props {
    product:Product
}


interface Product {
    id:string;
    title:string;
    img?:string;
}


const ProductCard = ({ product }: Props) => { 
  const {counter, increaseBy } = useProduct(); 


  return (
    <div className={style.productCard}>
        <img className={style.productImg} src={product.img ? product.img: noImage } alt="Coffee Mug" />
        {/* <img className={style.productImg} src={noImage} alt="Coffee Mug" /> */}
        <span className={style.productDescription}>{product.title }</span>

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