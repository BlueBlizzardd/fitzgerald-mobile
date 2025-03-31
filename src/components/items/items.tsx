import { Component } from "solid-js";
import './items.css'

type ItemProps = {
    image: string;
    title: string;
    description: string;
    price: number;
}

export const Item: Component<ItemProps> = (props) => {
    return (
        <div class="item grid">
            <div class="image-container">
                <img class="image" src={props.image} alt={props.image} />
            </div>
            <div class="item-title anton-regular">{props.title}</div>
            <div class="item-description poppins-regular">{props.description}</div>
            <div class="item-pricing-info flex">
                <div class="item-price anton-regular">${props.price}</div>
                <button class="btn btn-item">
                    <img src="/add_to_cart.png" alt="add_to_cart" />
                </button>
            </div>
        </div>
    )
}
