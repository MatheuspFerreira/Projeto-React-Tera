import { Searchproduct } from '../../Routes';
import { CART } from '../Cart';
import { Logindropdown } from './Logindropdown';
import iconeBntBuscador from '../../_assets/icone.png'
import logoHeader from '../../_assets/LogoBranco.png'
import './header.css';
import { Topbar } from './Topbar';
import { useState } from 'react'
import { Navigate } from "react-router-dom";



export function Header() {
  const [findValue, setFindValue]=useState([]);
  const [findProduct2, setFindProduct2] =useState([]);


  function getFindValue (event) {
    setFindValue(event.target.value)
    
  
  }

 
 
 
  async function findProduct () {
    console.log(findValue)
   
    try {

      const response =  await fetch('https://projetotera-back-end.herokuapp.com/products/all');
      const data =  await response.json();
      setFindProduct2(data)
      console.log(data);
      <Searchproduct  products={data} />

      
      
      

    }catch (error){

      console.log(`${error.mensage}`);
      
    }
    
    
    
  }
  
  

  return (
      <header>
        <div className="first-content">
          <a href="/#" className="link-header"><img   className="logo-mz" src={logoHeader} alt="MZ eletrônicos.logo"/></a>
          <section className="container-buscador">
            <input className="buscador" type="text" placeholder="Busque aqui" onChange={event => getFindValue(event)}/>
            <button className='Bnt__Buscador'><img className='Bnt__img' src={iconeBntBuscador} alt="Buscador img" onClick={findProduct} /></button>
          </section>
          <div className="Login">
            <Logindropdown />
            <CART />
          </div>
        </div>
          <div className="second-content">
            <Topbar />
          </div>
    </header>
    );
}