import { ParentComponent, useContext } from "solid-js";
import { createStore } from "solid-js/store"
import { CartContext, CartItem, Shop } from "./context";
import { TItem } from "../../types/items";

export const CartProvider: ParentComponent = (props) => {
    const [cart, setCart] = createStore<CartItem[]>([]);
    const shop: Shop = [
        cart,
        {
            addItem(item: TItem) {
                const index = cart.findIndex(CItem => CItem.title === item.title)

                if (index >= 0) {
                    return setCart(index, "amount", (amount) => ++amount)
                }

                setCart(cart.length, { ...item, amount: 1 })
            },
            deleteItem(item: CartItem) {
                const index = cart.findIndex(i => item.title === i.title);

                if (index >= 0 && item.amount <= 1) {
                    return setCart(cart => cart.toSpliced(index, 1));
                }

                setCart(index, "amount", (amount) => --amount);
            },
            dropItem(title: string) {
                const index = cart.findIndex(item => item.title === title);

                if (index >= 0) {
                    return setCart(cart => cart.toSpliced(index, 1));
                }
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
