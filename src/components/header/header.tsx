import { Component, createMemo } from "solid-js";
import './header.css';
import { useLocation } from "@solidjs/router";
import { Banner } from "../banner/banner";

export const Header: Component = () => {
    const location = useLocation();
    const isHome = createMemo(() => location.pathname === '/');

    return (
        <header class="header">
            <div class="header-logos flex">
                <img src="" alt="" class="cart" />
                <img src="/fitzgerald.png" alt="fitzgerald_logo" class="fitzgerald" />
                <img src="" alt="" class="user" />
            </div>
            <div class="ruler"></div>
            {isHome() ? <Banner /> : location.pathname}
        </header>
    )

}
