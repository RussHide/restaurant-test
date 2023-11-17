import DemoCard from '@img/DemoCard.jpg'
import { useState } from 'react';
import CustomizeModal from './CustomizeModal';
import NotCustomizeModal from './NotCustomizeModal';

const RandomProductCard = ({ product }) => {
    const [showCustomizeModal, setShowCustomizeModal] = useState(0)

    return (
        <div className=''>
            {showCustomizeModal === 1 && (<CustomizeModal hasDiscount={true} open={true} setOpen={setShowCustomizeModal} customizable={product.preparable} product={product} />)}
            {showCustomizeModal === 2 && (<NotCustomizeModal hasDiscount={true} open={true} setOpen={setShowCustomizeModal} customizable={product.preparable} product={product} />)}
            <div className="rounded-3xl overflow-hidden  flex flex-col max-w-[320px] min-w-[320px] h-full bg-white justify-between cursor-pointer">
                <div >
                    <img src={'http://18.117.237.107:8080/dash2023/restaurant/' + DemoCard} className='w-full object-cover h-44 object-center' alt="" />
                    <p className='bg-[#F6782E] text-white text-center font-semibold text-xl py-2'>50% de descuento</p>
                </div>
                <div className='px-3 my-2'>
                    <p className="font-semibold text-lg">{product.nombre}</p>
                    <p className="text-gray-500 text-sm">{product.descripcion.length > 50 ? `${product.descripcion.slice(0, 70)}...` : product.descripcion}</p>
                </div>
                <div className="px-3 pb-3">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-lg text-[#F6782E]">$ {(product.precio / 2).toFixed(2)}</p>
                            <p className="font-semibold line-through text-gray-400 ">$ {product.precio}</p>
                        </div>
                        <button onClick={() => setShowCustomizeModal(product.preparable ? 1 : 2)} className="bg-[#F6782E] rounded-lg p-2 font-semibold text-white">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomProductCard