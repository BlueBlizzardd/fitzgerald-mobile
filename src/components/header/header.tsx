import { Component, createMemo } from "solid-js";
import './header.css';
import { A, useLocation } from "@solidjs/router";
import { Banner } from "../banner/banner";

export const Header: Component = () => {
    const location = useLocation();
    const isHome = createMemo(() => location.pathname === '/');

    return (
        <header class="header">
            <div class="header-logos flex">
                <img src="/cart.png" alt="cart" class="cart" />
                <img src="/fitzgerald.png" alt="fitzgerald_logo" class="fitzgerald" />
                <A href="/login">
                    <img src="/user.png" alt="user" class="user" />
                </A>
            </div>
            <div class="ruler"></div>
            {isHome() ? <Banner /> : <div class="location anton-regular">{location.pathname.substring(1)}</div>}
        </header>
    )

}
