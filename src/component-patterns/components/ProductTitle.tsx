import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import style from '../styles/styles.module.css';

export interface Props {
  title?:string,
  className?: string
}


export const ProductTitle = ({title, className}: Props) => {

  const {product} = useContext(ProductContext)
  
  return (
    <span className={`${style.productDescription} ${className}`}>
        {title ? title : product.title}
    </span>
  )  
}