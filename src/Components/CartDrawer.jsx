import Drawer from 'antd/es/drawer'
import { BsArrowRightSquare } from 'react-icons/bs'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import CartItemCard from './CartItemCard'
const CartDrawer = ({ showCart, setShowCart }) => {
    const { cart } = useContext(CartContext)

    return (
        <Drawer
            drawerStyle={{ backgroundColor: '#F9FAFB', overflowY: 'auto' }}
            className='bg-[#2E3B47]'
            title={null}
            placement='right'
            closeIcon={<span className='text-[#F6782E]'><BsArrowRightSquare className='h-8 w-8' /></span>}
            width={500}
            onClose={() => setShowCart(false)}
            open={showCart}>
            <div className='flex flex-col justify-between h-full'>
                <ul className="space-y-5 text-sm">
                    {
                        cart.map(product => (
                            <CartItemCard key={product.id} product={product} />
                        ))
                    }
                </ul>
                <button disabled={cart.length > 0 ? false : true} onClick={() => { }} className={`${cart.length > 0 ? 'bg-[#F6782E]' : 'bg-[#f3b591]'} rounded-lg p-2 font-semibold text-white`}>Pagar Orden</button>
            </div>
        </Drawer>
    )
}

export default CartDrawer