import { Component } from "solid-js";
import './featured.css'

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
            <div class="item-pricing-info">
                <div class="item-price anton-regular">{props.price}</div>
                <button class="btn btn-item">Ver M&aacute;s</button>
            </div>
        </div>
    )
}
