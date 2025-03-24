import { Component } from "solid-js";
import './navbar.css';

export const NavBar: Component = () => {
    return (
        <nav class="navbar flex">
            <img class="fitz-logo" src="/fitz.png" alt="fitz_logo" />
            <div class="hamburger flex flex-column">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <div class="logos flex">
                <img src="/ig.png" alt="instagram" />
                <img class="fb" src="/fb.png" alt="facebook" />
                <img src="/ws.png" alt="whatsapp" />
            </div>
        </nav>
    )

}
