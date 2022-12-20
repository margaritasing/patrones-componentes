import { createContext, ReactElement, useContext } from 'react';
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

interface ProductContextProps {
  counter:number,
  increaseBy: (value: number) => void,
  product:Product
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } =  ProductContext


export const ProductImage = ({img = '' }) => {

  const { product } = useContext( ProductContext )

  let imgToShow: string;

  if (img) {
    imgToShow = img;   
  }else if (product.img) {
    imgToShow = product.img;  
  }else{
    imgToShow = noImage;
  }

  return (
    <img className={style.productImg} src={ imgToShow } alt="Product-img" />  
  )
}

export const ProductTitle = ({title}: {title:string}) => {

  const {product} = useContext(ProductContext)

  return (
    <span className={style.productDescription}>
      {title ? title : product.title}
    </span>
  )  
}



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


export const ProductCard = ({ children, product }: Props) => { 

  const {counter, increaseBy } = useProduct(); 


  return (
    <Provider value={{
      counter,
      increaseBy, 
      product
    }}>
        <div className={style.productCard}>

        { children }

        {/*  <ProductImage img={product.img} />
          
        <ProductTitle title={product.title}/>

        <ProductButton increaseBy={ increaseBy } 
        counter={ counter }/> */}
        
        </div>
    </Provider>
  )
}

ProductCard.Title   = ProductTitle;
ProductCard.Image   = ProductImage;
ProductCard.Buttons = ProductButton;

