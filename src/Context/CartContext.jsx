import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";


export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [itemAmount, setItemAmount] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        console.log(cart);
    }, [cart])

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount
        }, 0)
        setTotal(total)
    })

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount
            }, 0)
            setItemAmount(amount)
        }
    }, [cart])

    const addToCart = (product, id, amount) => {
        const newItem = { ...product, amount }
        const cartItem = cart.find(product => {
            return product.id === id
        })

        if (cartItem) {
            const newCart = [...cart].map(product => {
                if (product.id === id) {
                    return { ...product, amount: cartItem.amount + 1 }
                } else {
                    return product
                }
            })
            setCart(newCart)
            toast.success('Producto agregado al carrito')
        } else {
            setCart([...cart, newItem])
            toast.success('Producto agregado al carrito')
        }
    }

    const removeFromCart = (id) => {
        const newCart = [...cart].filter(product => {
            return !(product.id === id)
        })
        setCart(newCart)
        toast.success('Se elimino el producto del carrito')
    }

    const clearCart = () => {
        setCart([])
    }

    const increaseAmount = (id, size) => {
        const cartItem = cart.find(product => product.id === id && product.size === size)
        addToCart(cartItem, id, size)
    }

    const decreaseAmount = (id, size) => {

        const cartItem = cart.find(product => product.id === id && product.size === size)
        console.log(cartItem)
        if (cartItem) {
            const newCart = cart.map(product => {
                if (product.id === id && product.size === size) {
                    return { ...product, amount: cartItem.amount - 1 }
                } else {
                    return product
                }
            })
            setCart(newCart)
        }
        if (cartItem.amount < 2) {
            removeFromCart(id, size)
        }
    }



    return (
        <CartContext.Provider value={{ addToCart, cart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider