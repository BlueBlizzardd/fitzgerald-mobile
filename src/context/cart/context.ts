import { createContext } from "solid-js";
import { TItem } from "../../types/items";

export type CartItem = TItem & { amount: number }
export type Shop = [
    CartItem[],
    {
        addItem: (item: TItem) => void,
        deleteItem: (title: string) => void,
    }
]

export const CartContext = createContext<Shop>();
