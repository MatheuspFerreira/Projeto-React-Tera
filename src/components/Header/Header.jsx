

import 'antd/dist/antd.min.css';
import { CART } from '../Cart';
import { Logindropdown } from './Logindropdown';
import iconeBntBuscador from '../../_assets/icone.png'
import logoHeader from '../../_assets/LogoBranco.png'
import './header.css';
import { Topbar } from './Topbar';







export function Header() {


  return (
      <header>
        <div className="first-content">
          <a href="/#" className="link-header"><img   className="logo-mz" src={logoHeader} alt="MZ eletrônicos.logo"/></a>
          <section className="container-buscador">
            <input className="buscador" type="text" placeholder="Busque aqui"/>
            <button className='Bnt__Buscador'><img className='Bnt__img' src={iconeBntBuscador} alt="Buscador img" /></button>
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