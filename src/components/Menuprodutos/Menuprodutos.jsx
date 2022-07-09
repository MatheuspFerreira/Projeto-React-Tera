import './Menuprodutos.css'
import banner_menu from '../../_assets/cadeira-gamer1.jpg'
import banner_menu2 from '../../_assets/hardware.jpg'
import banner_menu3 from '../../_assets/play5.jpg'
import banner_menu4 from '../../_assets/tablets.jpg'
import banner_menu5 from '../../_assets/COMPUTADORES.png'
import banner_menu6 from '../../_assets/tv.png'
import banner_menu7 from '../../_assets/perifericos2.png'



export function Menuprodutos () {
    return (
        
        <div className="container-produtos">
        <a className="hiper-link-produtos" href="/#"><div className="display-produtos">
            <ul className="product-list">
                <li className="poduct-list-li">CADEIRAS GAMER</li>
                <li className="poduct-list-li"><img className="display-produtos-img" src={banner_menu} alt="Cadeira-Gamer.png"/></li>
            </ul>

        </div></a>
        <a className="hiper-link-produtos" href="/#"><div className="display-produtos">
            <ul className="product-list">
                <li className="poduct-list-li">HARDWARE</li>
                <li className="poduct-list-li"><img className="display-produtos-img" src={banner_menu2} alt="Foto de hardware para pc"/></li>
            </ul>

        </div></a>
        <a className="hiper-link-produtos" href="/#"><div className="display-produtos">
            <ul className="product-list">
                <li className="poduct-list-li">GAMES</li>
                <li className="poduct-list-li"><img className="display-produtos-img3" src={banner_menu3} alt="GAMES.png"/></li>
            </ul>
        </div></a>
        <a className="hiper-link-produtos" href="/#"><div className="display-produtos">
            <ul className="product-list">
                <li className="poduct-list-li">TABLETS E IPADS</li>
                <li className="poduct-list-li"><img className="display-produtos-img2" src={banner_menu4} alt="TABLETS E IPADS.png"/></li>
            </ul>
        
        </div></a>
        <a className="hiper-link-produtos" href="/#"><div className="display-produtos">
            <ul className="product-list">
                <li className="poduct-list-li">COMPUTADORES  NOTEBOOKS</li>
                <li className="poduct-list-li"><img className="display-produtos-img2" src={banner_menu5} alt=""/></li>
            </ul>

        </div></a>
        <a className="hiper-link-produtos" href="celulares.html"><div className="display-produtos">
            <ul className="product-list">
                <li className="poduct-list-li">CELULARES</li>
                <li className="poduct-list-li"><img className="display-produtos-img2" src={banner_menu5} alt="celphone.png"/></li>
            </ul>

        </div></a>
        <a className="hiper-link-produtos" href="/#"><div className="display-produtos">
            <ul className="product-list">
                <li className="poduct-list-li">TV</li>
                <li className="poduct-list-li"><img className="display-produtos-img2" src={banner_menu6} alt=""/></li>
            </ul>
        </div></a>
        <a className="hiper-link-produtos" href="/#"><div className="display-produtos">
            <ul className="product-list">
                <li className="poduct-list-li">PERIFÉRICOS</li>
                <li className="poduct-list-li"><img className="display-produtos-img2" src={banner_menu7} alt=""/></li>
            </ul>

        </div></a>
    </div>

    );
}