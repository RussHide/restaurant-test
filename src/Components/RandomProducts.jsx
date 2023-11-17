
import { RandomProductCard } from "."
import { discountFood } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';


const RandomProducts = () => {
    return (
        <div className="pt-5 px-4">
            <div>
                <p className="font-semibold text-4xl">Descuentos del dia</p>
                <p className="text-gray-500 text-lg mb-5">Platillos en super precio</p>
                <Swiper className='' wrapperClass=' h-full pb-8  bg-[#F3F4F6]' slidesPerView='auto' freeMode={true} modules={[FreeMode]}>
                    {
                        discountFood.map((product, index) => (
                            <SwiperSlide className={`max-w-fit ${index !== discountFood.length - 1 ? 'mx-2' : ''}`}  key={product.id}>
                               <RandomProductCard key={product.id} product={product} customizable={product.preparable} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default RandomProducts