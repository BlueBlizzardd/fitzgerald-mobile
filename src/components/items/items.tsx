import { Component } from "solid-js";
import { TItem } from "../../types/items";
import { useCart } from "../../context/cart/cart";
import './items.css'

type ItemProps = TItem;

export const Item: Component<ItemProps> = (props) => {
    const [_, { addItem }] = useCart();

    return (
        <div class="item grid">
            <div class="image-container">
                <img class="image" src={props.image} alt={props.image} />
            </div>
            <div class="item-title anton-regular">{props.title}</div>
            <div class="item-description poppins-regular">{props.description}</div>
            <div class="item-pricing-info flex">
                <div class="item-price anton-regular">${props.price}</div>
                <button class="btn btn-item" onClick={() => addItem(props)}>
                    <img class="add-to-cart" src="/add_to_cart.svg" alt="add_to_cart" />
                </button>
            </div>
        </div>
    )
}
