import MeetCategory from '@img/MeetCategory.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { categories } from '../data';
import { Link } from 'react-router-dom';


const CategoryBar = () => {
    return (
        <div className='px-3 pt-5'>
            <Swiper className='' wrapperClass=' h-full pb-8  bg-[#F3F4F6]' slidesPerView='auto' freeMode={true} modules={[FreeMode]}>
                {
                    categories.slice(0, 6).map((item, index) => (
                        <SwiperSlide className={`max-w-fit mx-2`} key={item.id}>
                            <div className='bg-white  rounded-2xl shadow-lg p-2 cursor-pointer transition-all duration-300  hover:shadow-xl'>
                                <img src={'http://18.117.237.107:8080/dash2023/restaurant/' + MeetCategory} className='h-44 w-44 ' alt="" />
                                <p className='font-semibold text-center text-xl'>{item.nombre}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
                <SwiperSlide className='max-w-fit mr-2 h-full'>
                    <Link to='categorias'>
                        <div className='bg-white w-fit h-fit rounded-2xl shadow-lg p-2 cursor-pointer transition-all duration-300  hover:shadow-xl flex justify-center items-center flex-col'>
                            <div className='h-44 w-44 p-6'>
                                <div className='bg-[#FCD2B9] h-full w-full rounded-2xl flex justify-center items-center'>
                                    <div className='bg-white rounded-full h-16 w-16 flex justify-center items-center'>
                                        <p className='text-4xl font-semibold mb-5'>. . .</p>
                                    </div>
                                </div>
                            </div>
                            <p className='font-semibold text-center text-xl pb-1'>Todas las categorias</p>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CategoryBar