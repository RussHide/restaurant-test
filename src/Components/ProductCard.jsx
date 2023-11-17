import DemoCard from '@img/DemoCard.jpg'
import { useState } from 'react';
import CustomizeModal from './CustomizeModal';
import NotCustomizeModal from './NotCustomizeModal';

const ProductCard = ({ product }) => {
    const [showCustomizeModal, setShowCustomizeModal] = useState(0)
   

    return (
        <div className="rounded-xl overflow-hidden flex  max-w-[650px] min-w-[650px]" >
            {showCustomizeModal === 1 && (<CustomizeModal open={true} setOpen={setShowCustomizeModal} customizable={product.preparable} product={product} />)}
            {showCustomizeModal === 2 && (<NotCustomizeModal open={true} setOpen={setShowCustomizeModal} customizable={product.preparable} product={product} />)}
            <div className='w-1/2'>
                <img src={'http://18.117.237.107:8080/dash2023/restaurant/' + DemoCard} className='w-full object-cover h-44 object-center' alt="" />
            </div>
            <div className="w-1/2 bg-white p-3 flex flex-col justify-around " >
                <p className="font-semibold text-lg">{product.nombre}</p>
                <p className="text-gray-500 text-sm">{product.descripcion}</p>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-semibold text-lg text-[#F6782E]">$ {product.precio}</p>
                    </div>
                    <button onClick={() => setShowCustomizeModal(product.preparable ? 1 : 2)} className="bg-[#F6782E] rounded-lg p-2 font-semibold text-white">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard