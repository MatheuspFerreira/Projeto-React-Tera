import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Produto } from "../components/Produto"
import '../styles/Searchproduct.css'
import { CARREGANDO } from "../components/Carregando";
import bannerFooter from "../_assets/dell.png"
import { CarouselComponente } from "../components/Carousel" 
import { SECTION } from "../components/Section"
import { Result } from 'antd';


 





export function Searchproduct () {
    
    const [productsFound, setProductsFound] = useState(false)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { produto } = useParams()


    useEffect(() => {

        async function search(){
            setLoading(true)
            setProductsFound(false)
            
            
            let response = await fetch(`https://projetotera-back-end.herokuapp.com/products/${produto}`)
            let data = await response.json()
            setProducts(data)
            console.log(data);
            console.log(produto)
    
            if(data.length === 0) {
                setLoading(false)
                setProductsFound(false)
                return;
                
    
            }else {
                setLoading(false)
                setProductsFound(true)

            }
            
          
        }
        
        search()


    },[produto])

    return (

        <>
           <div className="search__mainContainer">
                <CarouselComponente />
                <SECTION textSection={` ${produto}`}/> 
                <div className="search__Container">
                        
                    {
                        productsFound 
                        &&
                        
                        products.map((currentMsg, index) => 
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
                    }
                    {
                        loading
                        &&
                        <CARREGANDO textCarregando="Procurando"/>

                    }

                    <section 
                        className=
                        {
                            loading 
                            || 
                            productsFound 
                            ? 
                            "search__text--disabled" 
                            : 
                            "search__text"

                        }
                    >
                        
                        <Result
                            title={`Ops! Nenhum resultado encontrado para "${produto}"`} 
                        />

                    </section>               
                </div>
                <img className='Banner_dell' src={bannerFooter} alt="banner dell.png" />

            </div>

        </>
    )
    
    
    
    
    
    
    
  
    



    

    
    
    
    
}
