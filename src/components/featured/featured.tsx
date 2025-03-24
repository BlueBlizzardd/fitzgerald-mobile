import { Component } from "solid-js";
import './featured.css'

type FeaturedProps = {
    image: string;
    title: string;
    description: string;
}

export const Featured: Component<FeaturedProps> = (props) => {
    return (
        <div class="featured grid">
            <div class="image-container">
                <img class="image" src={props.image} alt={props.image} />
            </div>
            <div class="title anton-regular">{props.title}</div>
            <div class="description poppins-regular">{props.description}</div>
            <button class="btn btn-more">Ver M&aacute;s</button>
        </div>
    )
}
