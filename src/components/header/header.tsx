import { Component } from "solid-js";
import './header.css';

export const Header: Component = () => {
    return (
        <header class="header">
            <div class="header-logos flex">
                <img src="" alt="" class="cart" />
                <img src="/fitzgerald.png" alt="fitzgerald_logo" class="fitzgerald" />
                <img src="" alt="" class="user" />
            </div>
            <div class="ruler"></div>
        </header>
    )

}
