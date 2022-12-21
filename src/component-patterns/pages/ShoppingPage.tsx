import {ProductCard, ProductButton, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';

const product = {
  id:'1',
  title:'Coffee Mug - Card',
  img:'./coffee-mug.png'
}

export const Shoppingpage = () =>{
    return (
        <div  style={{ textAlign:'center' }}>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap'}}>
                <ProductCard product={ product } className="bg-dark" >                  
                    <ProductImage className='custom-image'/>
                    <ProductTitle title={"Coffee"} className='text-blanco'/>    
                    <ProductButton/>       
                </ProductCard> 
            {/* Esta es la segunda manera de exportar y mostrar componentes 
            esto es el compont-component-parents*/}
                <ProductCard product={ product } >                  
                    <ProductCard.Image/>
                    <ProductCard.Title />    
                    <ProductCard.Buttons/>       
                </ProductCard> 
            </div>
           
        </div>
        /* Se usan diferentes maneras para exportar los componentes */
    )
}