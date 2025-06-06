import { For } from "solid-js";
import { useCart } from "../../context/cart/cart"
import { ShoppingCartItem } from "../../components/shopping-cart-items/shopping-cart-item";
import './shopping-cart.css'

export const ShoppingCart = () => {
    const [cart] = useCart();

    return (
        <div class="featured-container flex flex-column">
            <For each={cart}>
                {(item) =>
                    <ShoppingCartItem title={item.title} description={item.description} price={item.price} amount={item.amount} image='/Burger.png' />
                }
            </For>
            <div class="pricing delivery-pricing flex anton-regular">
                <div>Delivery</div>
                <hr class="dotted-line" />
                <div class="price">$2</div>
            </div>
            <div class="pricing total-pricing flex anton-regular">
                <div>Total a Pagar</div>
                <hr class="dotted-line" />
                <div class="price">
                    ${cart.reduce((acc, curr) => acc + (curr.price * curr.amount), 0) + 2}
                </div>
            </div>
        </div>
    )

}
