import { createContext } from "solid-js";
import { TItem } from "../../types/items";

export type CartItem = TItem & { amount: number }
export type Shop = [
    CartItem[],
    {
        addToCart: (item: TItem) => void,
        updateCart: (title: string) => void,
        removeFromCart: (title: string) => void
    }
]

export const CartContext = createContext<Shop>();
