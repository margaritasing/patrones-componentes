import { ProductCard } from "../components/ProductCard"
import { ProductButton, ProductImage, ProductTitle } from "../components/ProductCard";

const product = {
    id:'1',
    title:'Coffee Mug - Card',
    img:'./coffee-mug.png'

}

export const Shoppingpage = () =>{
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap' }}>
                <ProductCard product={ product }>                  
                    <ProductImage/>
                    <ProductTitle title={" "}/>    
                    <ProductButton increaseBy={function (value: number): void {
                            throw new Error("Function not implemented.");
                        } } counter={0}/>       
                </ProductCard> 
            </div>
            {/* Esta es la segunda manera de exportar y mostrar componentes */}
            <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap' }}>
                <ProductCard product={ product }>                  
                    <ProductCard.Image/>
                    <ProductCard.Title title={" "}/>    
                    <ProductCard.Buttons increaseBy={function (value: number): void {
                            throw new Error("Function not implemented.");
                        } } counter={0}/>       
                </ProductCard> 
            </div>
        </div>
        /* Se usan diferentes maneras para exportar los componentes */

    )
}