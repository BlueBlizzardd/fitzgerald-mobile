import { Component } from "solid-js";
import './featured.css'
import { A } from "@solidjs/router";

type FeaturedProps = {
    image: string;
    title: string;
    description: string;
    route: string
}

export const Featured: Component<FeaturedProps> = (props) => {
    return (
        <div class="featured grid">
            <div class="image-container">
                <img class="image" src={props.image} alt={props.image} />
            </div>
            <div class="title anton-regular">{props.title}</div>
            <div class="description poppins-regular">{props.description}</div>
            <A class="btn btn-more poppins-bold" href={props.route}>
                Ver M&aacute;s
            </A>
        </div>
    )
}
