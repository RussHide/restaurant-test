import { useContext, useState } from 'react'
import PizzaHeader from '@img/PizzaHeader.png'
import { IoCartOutline } from 'react-icons/io5'
import { HiOutlineMenuAlt2 } from "react-icons/hi"
import { IoSearch } from "react-icons/io5";
import { CartContext } from '../Context/CartContext';
import { CartDrawer } from './';
const Header = () => {
    const [searchedFood, setSearchedFood] = useState('')
    const [showCart, setShowCart] = useState(false)
    const { itemAmount } = useContext(CartContext)
    return (
        <div className='bg-[#F6782E] py-5 '>
            <CartDrawer showCart={showCart} setShowCart={setShowCart} />
            <div className='flex justify-around items-center py-5'>
                <div className='bg-white rounded-full'>
                    <HiOutlineMenuAlt2 className='text-6xl p-3 ' />
                </div>
                <p className='text-2xl font-semibold text-white'>Bienvenido Juan</p>
                <div onClick={() => setShowCart(!showCart)} className='relative  cursor-pointer'>
                    <div className='absolute -top-1 -right-2 bg-white rounded-full p-0.5 px-2 font-semibold text-[#F6782E]'>{itemAmount}</div>
                    <IoCartOutline className='text-6xl text-white' />
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='flex justify-center items-center relative w-2/3'>
                    <IoSearch className='absolute left-2 text-gray-500  ' />
                    <input className='rounded-md w-full py-2 px-7 ring-0 outline-none' placeholder='Busca tu comida...' onChange={(e) => setSearchedFood(e.target.value)} />
                </div>
            </div>
            <div className='flex justify-center gap-x-10 items-center p-2 my-10 pr-20'>
                <div className=''>
                    <img src={'http://18.117.237.107:8080/dash2023/restaurant/' + PizzaHeader} className='h-full rotate-12  w-[230px]' alt="" />
                </div>
                <div className='max-w-md'>
                    <p className='text-white font-semibold text-xl text-center'>Descubre una sinfonía de sabores a tu alcance.</p>
                    <p className='text-white text-center text-lg'> Desde exquisitas entradas hasta deliciosos postres, nuestra aplicación te conecta directamente con el placer culinario.</p>
                    <p className='text-white font-semibold text-xl text-center'>¡Ordénalo con un toque!</p>
                </div>
                <div className=''>
                    <button className='bg-white text-[#F6782E] rounded-md py-2 px-7 font-semibold'>Ordena ahora</button>
                </div>
            </div>
        </div>
    )
}

export default Header