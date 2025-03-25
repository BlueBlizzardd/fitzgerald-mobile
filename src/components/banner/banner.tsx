import { Component } from "solid-js"
import './banner.css'

export const Banner: Component = () => {
    return (
        <div class="banner flex">
            <div class="banner-content flex flex-column">
                <div class="banner-subtitle anton-regular">The Real</div>
                <div class="banner-title anton-regular">Burger</div>
                <div class="btn btn-banner poppins-bold">Ver Men&uacute;</div>
            </div>
        </div>
    )
}
