import { For } from "solid-js";
import { Item } from "../../components/items/items";

const items = [
    {
        title: 'Refresco',
        description: 'Pepsi, Coca-Cola, Golden, 7-up, Postobon',
        price: 0.8
    },
    {
        title: 'Cerveza',
        description: 'Polar, Pilsen, Solera, Regional, Zulia',
        price: 1
    },
    {
        title: 'Te',
        description: 'Te negro, verde, jamaica y frutos rojos.',
        price: 0.8
    },
    {
        title: 'Jugos',
        description: 'Zumos de naranja, piña, fresa y mora.',
        price: 1
    }
];

export const Drinks = () => {
    return (
        <div class="featured-container flex flex-column">
            <For each={items}>
                {(item) =>
                    <Item title={item.title} description={item.description} price={item.price} image='/Burger.png' />
                }
            </For>
        </div>
    )
}
