import { useState } from 'react';
import 'antd/dist/antd.min.css';
import { Button, Drawer} from 'antd';
import './Cart.css'


export function CART () {

  const [visibleSalesCar, setVisibleSalesCar] = useState(false);

  const showDrawerSalesCar = () => {
    setVisibleSalesCar(true);

  };
    
  const onCloseSalesCar = () => {
    setVisibleSalesCar(false);

  };

  return (
        <section className="car__content">
                  <Button className='car__btn' type="" onClick={showDrawerSalesCar}>
                    <svg className="car__banner" width="20" height="20" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><g opacity="0.8"><path d="M7.19975 19.2C5.8798 19.2 4.81184 20.28 4.81184 21.6C4.81184 22.92 5.8798 24 7.19975 24C8.51971 24 9.59967 22.92 9.59967 21.6C9.59967 20.28 8.51971 19.2 7.19975 19.2ZM0 0V2.4H2.39992L6.71977 11.508L5.09982 14.448C4.90783 14.784 4.79984 15.18 4.79984 15.6C4.79984 16.92 5.8798 18 7.19975 18H21.5993V15.6H7.70374C7.53574 15.6 7.40375 15.468 7.40375 15.3L7.43974 15.156L8.51971 13.2H17.4594C18.3594 13.2 19.1513 12.708 19.5593 11.964L23.8552 4.176C23.9542 3.99286 24.004 3.78718 23.9997 3.57904C23.9955 3.37089 23.9373 3.16741 23.8309 2.98847C23.7245 2.80952 23.5736 2.66124 23.3927 2.55809C23.2119 2.45495 23.0074 2.40048 22.7992 2.4H5.05183L3.92387 0H0ZM19.1993 19.2C17.8794 19.2 16.8114 20.28 16.8114 21.6C16.8114 22.92 17.8794 24 19.1993 24C20.5193 24 21.5993 22.92 21.5993 21.6C21.5993 20.28 20.5193 19.2 19.1993 19.2Z" fill="white"></path></g></svg>
                    <span>Meu Carrinho</span> 
                  </Button>
                  <Drawer title="Meu Carrinho" placement="right" onClose={onCloseSalesCar} visible={visibleSalesCar}>
                    <div className='car__display'>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>

                    </div>
                    
                    
                  </Drawer>
                </section>
    );
}