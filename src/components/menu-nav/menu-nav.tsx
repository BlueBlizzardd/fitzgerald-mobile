import { Component } from 'solid-js'
import './menu-nav.css'

export const MenuNav: Component = () => {
    return (
        <div class='menu-nav flex'>
            <button class='btn menu-nav-delivery poppins-bold'>Delivery</button>
            <button class='btn'>
                <img src="/burger_icon.png" alt="burgers" class='menu-nav-icon' />
            </button>
            <button class='btn'>
                <img src="/plate.png" alt="platos" class='menu-nav-icon' />
            </button>
            <button class='btn'>
                <img src="/drink.png" alt="bebidas" class='menu-nav-icon' />
            </button>
            <button class='btn'>
                <img src="/ice_cream_icon.png" alt="postres" class='menu-nav-icon' />
            </button>
        </div>
    )
} 
