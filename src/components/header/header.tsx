import { Component, createMemo } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { useCart } from "../../context/cart/cart";
import { Banner } from "../banner/banner";
import './header.css';

export const Header: Component = () => {
    const [cart] = useCart();
    const amount = createMemo(() => cart.reduce((acc, curr) => acc + curr.amount, 0));
    const location = useLocation();
    const isHome = createMemo(() => location.pathname === '/');

    return (
        <header class="header">
            <div class="header-logos flex">
                <div class="cart-section">
                    <A href="/carrito">
                        <img src="/cart.svg" alt="cart" class="cart" />
                    </A>
                    <div class="cart-amount poppins-bold" classList={{ "hidden": cart.length ? false : true }}>{amount()}</div>
                </div>
                <A href="/">
                    <img src="/fitzgerald.png" alt="fitzgerald_logo" class="fitzgerald" />
                </A>
                <A href="/login">
                    <img src="/user.png" alt="user" class="user" />
                </A>
            </div>
            <div class="ruler"></div>
            {isHome() ? <Banner /> : <div class="location anton-regular">{location.pathname.substring(1)}</div>}
        </header>
    )

}
