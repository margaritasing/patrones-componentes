import { createContext, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct'
import style from '../styles/styles.module.css';

import { Product, ProductContextProps } from '../interfaces/interfaces';

import { ProductButton, ProductImage, ProductTitle } from "../components";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } =  ProductContext;


export interface Props {
  product:Product,
  children?: ReactElement | ReactElement[],
  className?: string
}

export const ProductCard = ({ children, product, className }: Props) => { 

  const {counter, increaseBy } = useProduct(); 

  return (
    <Provider value={{
      counter,
      increaseBy, 
      product
    }}>
        <div className={`${style.productCard} ${className}`}>
          { children }       
        </div>
    </Provider>
  )
}

ProductCard.Title   = ProductTitle;
ProductCard.Image   = ProductImage;
ProductCard.Buttons = ProductButton;

