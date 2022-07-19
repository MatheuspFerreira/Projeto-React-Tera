import {Produto} from "../components/Produto"
import {Menuprodutos} from '../components/Menuprodutos'
import {SECTION} from '../components/Section'
import { CARREGANDO } from "../components/Carregando";

import { useEffect , useState } from "react";
import { Carousel } from 'antd';

import banner1 from '../_assets/banner1.png'
import banner2 from '../_assets/banner2.png'
import banner3 from '../_assets/banner3.png'
import banner4 from '../_assets/dell.png'
import banner5 from '../_assets/banner4.jpg'
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
    <Carousel autoplay>
      <div>
        <h3 className='contentStyle'><img className='Banner_2' src={banner2} alt="" /></h3>
      </div>
      <div>
        <h3 className='contentStyle'><img className='Banner_3' src={banner3} alt="" /></h3>
      </div>
      <div>
        <h3 className='contentStyle'><img className='Banner_1' src={banner1} alt="" /></h3>
      </div>
    </Carousel> 
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
    <img className="Banner__5" src={banner5} alt="" />
    <SECTION textSection={'⚡ Promoções Tech'}/>

    


        

    <img  className='Banner_dell' src={banner4} alt="Banner dell" />
  </div>
  )
}