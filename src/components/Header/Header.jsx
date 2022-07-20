import { Searchproduct } from '../../Routes';
import { CART } from '../Cart';
import { Logindropdown } from './Logindropdown';
import iconeBntBuscador from '../../_assets/icone.png'
import logoHeader from '../../_assets/LogoBranco.png'
import './header.css';
import { Topbar } from './Topbar';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";




export function Header() {
  const [findValue, setFindValue]=useState([]);
  const [findProduct2, setFindProduct2] =useState([]);
 


  function getFindValue (event) {
    setFindValue(event.target.value)
    
  
  }

 
 
  let navigate = useNavigate();
  async function findProduct (event) {
    
   
    try {

      event.preventDefault();
      navigate(`/find/${findValue}`,{replace:true})

      
      
      
    }catch (error){

      console.log(`${error.mensage}`);
      
    }
    
    
    
  }
  
  

  return (
      <header>
        <div className="first-content">
        
          <a href="/#" className="link-header"><img   className="logo-mz" src={logoHeader} alt="MZ eletrônicos.logo"/></a>
          <form className="container-buscador" onSubmit={findProduct}>
            <input className="buscador" type="text" placeholder="Busque aqui" onChange={event => getFindValue(event)}/>
            <button className='Bnt__Buscador'><img className='Bnt__img' src={iconeBntBuscador} alt="Buscador img" /></button>
          </form>
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