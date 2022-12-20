import { ProductCard } from "../components/ProductCard"
import { ProductButton, ProductImage, ProductTitle } from "../components/ProductCard";

const product = {
    id:'1',
    title:'Coffee Mug - Card',
    img:'./coffee-mug.png'

}

export const Shoppingpage = () =>{
    return (
        <div style={{ textAlign:'center' }}>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap'}}>
                <ProductCard product={ product }>                  
                    <ProductImage/>
                    <ProductTitle title={"Coffee"}/>    
                    <ProductButton/>       
                </ProductCard> 
            </div>
            {/* Esta es la segunda manera de exportar y mostrar componentes 
            esto es el compont-component-parents*/}
            <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap'}}>
                <ProductCard product={ product }>                  
                    <ProductCard.Image/>
                    <ProductCard.Title />    
                    <ProductCard.Buttons/>       
                </ProductCard> 
            </div>
        </div>
        /* Se usan diferentes maneras para exportar los componentes */

    )
}