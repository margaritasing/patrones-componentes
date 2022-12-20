import { ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct'
import style from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

interface Props {
    product:Product,
    children?: ReactElement | ReactElement[]
}


interface Product {
    id:string;
    title:string;
    img?:string;
}


export const ProductImage = ({img = '' }) => {
  return (
    <img className={style.productImg} src={ img ? img: noImage } alt="Product-img" />  
  )
}

export const ProductTitle = ({title}: {title:string}) => {
  return (
    <span className={style.productDescription}>{title}</span>
  )  
}

interface ProductButtonProps {
  increaseBy: (value:number) => void,
  counter:number
}

export const ProductButton = ({increaseBy, counter}: ProductButtonProps) => {
  return (
    <div className={ style.buttonsContainer}>

      <button className={style.buttonMinus}
      onClick={() => increaseBy(-1)}>-</button>

      <div className={style.countLabel}> { counter }</div>

      <button onClick={() => increaseBy(+1)} className={style.buttonAdd}> + </button>

  </div>

  )
}


export const ProductCard = ({ children, product }: Props) => { 
  const {counter, increaseBy } = useProduct(); 


  return (
    <div className={style.productCard}>

      { children }

     {/*  <ProductImage img={product.img} />
        
      <ProductTitle title={product.title}/>

      <ProductButton increaseBy={ increaseBy } 
      counter={ counter }/> */}
       
    </div>
  )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButton;

