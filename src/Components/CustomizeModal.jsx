import Modal from 'antd/es/modal'
import Input from 'antd/es/input'
import Select from 'antd/es/select'
const { Option } = Select
import { useState } from 'react'
const { TextArea } = Input
import DemoCard from '@img/DemoCard.jpg'
import { AiOutlinePlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { FiPlus, FiMinus } from "react-icons/fi";
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'

const CustomizeModal = ({ open, setOpen, product, hasDiscount }) => {
    const [productAmout, setProductAmout] = useState(1)
    const { addToCart } = useContext(CartContext)

    const btnSubmit = async () => {
        addToCart(product, product.id, productAmout)
        setOpen(0)
    }

    return (
        <Modal width={1000} footer={[
            <div key={1} className="flex justify-around items-center p-3 gap-x-4">
                <div className='bg-gray-100 flex justify-center items-center gap-7 px-4 rounded-lg py-2 w-1/3'>
                    <FiMinus onClick={() => { productAmout === 1 ? null : setProductAmout(productAmout - 1) }} className={`${productAmout === 1 ? ' text-gray-300' : 'cursor-pointer'}`} size={22} />
                    <span className='font-semibold text-lg select-none'>{productAmout}</span>
                    <FiPlus onClick={() => setProductAmout(productAmout + 1)} className='cursor-pointer' size={22} />
                </div>
                <button onClick={btnSubmit} className="bg-[#F6782E] hover:bg-[#E6681E] text-white px-8 md:px-4 py-2.5 flex justify-between rounded-xl font-semibold w-2/3 select-none"><span>Agregar al carrito</span><span>MX ${hasDiscount ? ((product.precio / 2) * productAmout).toFixed(2) : product.precio}</span></button>
            </div>
        ]} className="" open={open} onOk={btnSubmit} onCancel={() => setOpen(0)}>
            <div className="flex flex-col items-center" >
                <h2 className="text-3xl font-semibold mb-2 text-center text-gray-800 ">Completa tu platillo</h2>
                <div className="h-1 w-40 bg-blue-400 rounded mb-4" />
            </div>
            <div>
                <div>
                    <img src={'http://18.117.237.107:8080/dash2023/restaurant/' + DemoCard} className='rounded-xl' alt="" />
                </div>
                <div className='my-2'>
                    <p className='font-semibold text-4xl '>{product.nombre}</p>
                    <p className='font-semibold text-gray-500 text-xl'>{product.descripcion}</p>
                </div>
                <div className='w-full  '>
                    <label htmlFor="" className="text-gray-800 font-semibold px-1">Comentarios</label>
                    <TextArea rows={4} placeholder="" />
                </div>
                <div className="mt-4">
                    <div className='flex justify-between px-5 py-2 cursor-pointer items-center border-2 border-gray-300 rounded-xl'>
                        Mayonesa <AiOutlinePlusSquare className='text-[#F6782E] text-2xl' />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default CustomizeModal