import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct'
import style from '../styles/styles.module.css';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButton } from './ProductButton';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } =  ProductContext;




export const ProductCard = ({ children, product }: ProductCardProps) => { 

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

