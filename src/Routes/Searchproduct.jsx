import { Produto } from "../components/Produto"







export function Searchproduct ({products}) {
    
    const productsFound = {products}


    return (

        <>
            <div>
            {
                productsFound 
                ?  
                productsFound.map((currentMsg, index) => 
                    <Produto key = {`mensagens-${index}`}
        
                            productName = {currentMsg.name}
                            value = {currentMsg.price}
                            valueStrike ={currentMsg.pricestrike}
                            discount = {currentMsg.discount}
                            stock = {currentMsg.stock}
                            imgProduct ={currentMsg.productimg}
                            payment = {currentMsg.payment}
                            starcondition = {1}
                            starcondition1 = {1}
                            starcondition2 = {1}
                            starcondition3 = {0}
                            starcondition4 = {0}
            
                    />)
                : 
                "Product not Found"
        
            }

            </div>
        
        
        
        </>
    )
    
    
    
    
    
    
    
  
    



    

    
    
    
    
}
