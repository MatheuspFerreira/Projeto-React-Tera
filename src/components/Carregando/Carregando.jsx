import { Spin } from 'antd';
import './Carregando.css'

export function CARREGANDO ({textCarregando = 'Carregando'}) {
    return (
        
        <div className='carregando__content'>
            <Spin />
            <p>{textCarregando}</p>
            
        </div>

    );
};