import style from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'


const ProductCard = () => {
  return (
    <div className={style.productCard}>
        <img className={style.productImg} src="./coffee-mug.png" alt="Coffee Mug" />
        {/* <img className={style.productImg} src={noImage} alt="Coffee Mug" /> */}
        <span className={style.productDescription}>Coffee Mug</span>
    </div>
  )
}

export default ProductCard