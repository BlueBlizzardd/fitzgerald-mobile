import { Component } from "solid-js";
import { CartItem } from "../../context/cart/context";
import { useCart } from "../../context/cart/cart";
import './shopping-cart-item.css'

type ItemProps = CartItem;

export const ShoppingCartItem: Component<ItemProps> = (props) => {
    const [_, { addItem, deleteItem, dropItem }] = useCart();

    return (
        <div class="item grid">
            <div class="image-container">
                <img class="image" src={props.image} alt={props.image} />
            </div>
            <div class="item-title anton-regular">{props.title}</div>
            <div class="item-description poppins-regular">{props.description}</div>
            <div class="item-pricing-info flex">
                <div class="item-price anton-regular">${props.price}</div>
                <div class="item-options anton-regular flex">
                    <button class="btn btn-drop" onClick={() => dropItem(props.title)}>
                        <img class="img-garbage" src="/garbage.png" alt="eliminar" />
                    </button>
                    <div class="item-quantity flex">
                        <button class="btn btn-add" onClick={() => addItem(props)}>
                            <img class="img-add" src="/add.png" alt="añadir" />
                        </button>
                        <div class="item-amount">{props.amount}</div>
                        <button class="btn btn-remove" onClick={() => deleteItem(props)}>
                            <img class="img-minus" src="/minus.png" alt="quitar" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
