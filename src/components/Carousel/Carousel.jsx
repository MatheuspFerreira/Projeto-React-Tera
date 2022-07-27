import { Carousel } from "antd"
import banner1 from '../../_assets/banner1.png'
import banner2 from '../../_assets/banner2.png'
import banner3 from '../../_assets/banner3.png'




export function CarouselComponente () {

    return (

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
    )
}