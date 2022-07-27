import {Produto} from "../components/Produto"
import {Menuprodutos} from '../components/Menuprodutos'
import {SECTION} from '../components/Section'
import { CARREGANDO } from "../components/Carregando";
import { useEffect , useState } from "react";

import {CarouselComponente} from "../components/Carousel"
import banner4 from '../_assets/dell.png'
import banner_6_1 from '../_assets/banner__Lenovo.png'
import banner_6_2 from '../_assets/banner__Play.png'




export function Home() {

    const [mensagens, msgRecebida] = useState([])
    const [carregando, alterarCarrengado] = useState(true)
     
     
  useEffect(() => {
    async function products () {
      try {

        const response =  await fetch('https://projetotera-back-end.herokuapp.com/products/all');
        const data =  await response.json();
        msgRecebida(data);
        alterarCarrengado(false);
        console.log(data);

      }catch (error){

        console.log(`${error.mensage}`);
        
      }
      
    }
    
    products();
               
   
  }, []);

  
  return (


    <div className="Main__Container">
      <CarouselComponente />
    <SECTION textSection={'🎯 Mais Procurados'}/>

    <div className="Container__Products">

      {carregando ? <CARREGANDO  /> : mensagens.map((currentMsg, index) => 
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
        
        />
        
      )}

    </div>
    <section className="Banner__container">
      <img src={banner_6_1} alt="" />
      <img src={banner_6_2} alt="" />
    </section>

    <SECTION textSection={' ⇨ Menu de produtos'}/>
    <Menuprodutos />
    <img  className='Banner_dell' src={banner4} alt="Banner dell" />
  </div>
  )
}