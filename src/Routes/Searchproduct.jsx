import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Produto } from "../components/Produto"

export function Searchproduct() {

    const { produto } = useParams()
    pesquisa()
    async function pesquisa(){
        let response = await fetch('https://projetotera-back-end.herokuapp.com/products/all')
        let json = await response.json()
        for (let index = 0; index < json.length; index++) {
            if (json[index].name.match(`.*${produto}.*`)) {
                console.log(json[index]);
            }
        }
    }

    

    return (

        <>
            <div>
                {
                    // productsFound 
                    // ?  
                    // productsFound.map((currentMsg, index) => 
                    //     <Produto key = {`mensagens-${index}`}

                    //             productName = {currentMsg.name}
                    //             value = {currentMsg.price}
                    //             valueStrike ={currentMsg.pricestrike}
                    //             discount = {currentMsg.discount}
                    //             stock = {currentMsg.stock}
                    //             imgProduct ={currentMsg.productimg}
                    //             payment = {currentMsg.payment}
                    //             starcondition = {1}
                    //             starcondition1 = {1}
                    //             starcondition2 = {1}
                    //             starcondition3 = {0}
                    //             starcondition4 = {0}

                    //     />)
                    // : 
                    "Product not Found"

                }

            </div>



        </>
    )


















}
