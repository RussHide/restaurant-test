import DemoCard from '@img/DemoCard.jpg'
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

const CartItemCard = ({ product }) => {
    const { cart, removeFromCart } = useContext(CartContext)
    console.log(cart);
    return (
        <div className="rounded-xl overflow-hidden flex  w-full shadow-md relative">
            <FiTrash2 onClick={() => removeFromCart(product.id)} size={20} className=' absolute top-2 right-2 text-red-400 hover:text-red-400 transition-colors duration-300 cursor-pointer' />
            <div className='w-1/2'>
                <img src={'http://18.117.237.107:8080/dash2023/restaurant/' + DemoCard} className='w-full object-cover h-44 object-center' alt="" />
            </div>
            <div className="w-1/2 bg-white p-2.5 flex flex-col justify-around " >
                <p className="font-semibold text-lg mt-1">{product.nombre}</p>
                <p className="text-gray-500 text-sm">{product.descripcion.length > 10 ? `${product.descripcion.slice(0, 70)}...` : product.descripcion}</p>
                <div className="flex justify-between items-end">
                    <div>
                        <p className="font-semibold text-gray-400">Cantidad x<span className='text-lg'>{cart.find(prod => prod.id === product.id).amount}</span></p>
                        <p className="font-semibold text-lg text-[#F6782E]">$ {product.precio * cart.find(prod => prod.id === product.id).amount}</p>
                    </div>
                    <button onClick={() => { }} className="bg-[#F6782E] rounded-lg px-2 py-1 font-semibold text-white">Editar Orden</button>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard