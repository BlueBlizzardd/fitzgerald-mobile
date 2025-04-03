import { ParentComponent, useContext } from "solid-js";
import { createStore } from "solid-js/store"
import { CartContext, CartItem, Shop } from "./context";
import { TItem } from "../../types/items";

export const CartProvider: ParentComponent = (props) => {
    const [cart, setCart] = createStore<CartItem[]>([]);
    const shop: Shop = [
        cart,
        {
            addToCart(item: TItem) {
                setCart(cart.length, { ...item, amount: 1 })
            },
            updateCart(title: string) {
                setCart((item) => item.title === title, "amount", (amount) => ++amount)
            },
            removeFromCart(title: string) {
                setCart((cart) => cart.filter(item => item.title !== title));
            }
        }
    ];

    return (
        <CartContext.Provider value={shop}>
            {props.children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("can't find Cart");
    }

    return context
}
