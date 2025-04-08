import { For } from "solid-js";
import { Item } from "../../components/items/items";

const items = [
    {
        title: 'Cono Helado',
        description: 'Barquilla de galleta con helado soft. Sabor a mantecado, chocolate o Fresa.',
        price: 1
    },
    {
        title: 'Mixers',
        description: 'Vaso de helado con 2 toppings a elegir. Toppings: Oreo, Nutella, mani, dulce de leche y syrup de chocolate.',
        price: 1
    },
    {
        title: 'Nutella',
        description: 'Cheesecake tradicional con base de chocolate y topping de Nutella.',
        price: 3
    },
    {
        title: 'Dulce de Leche',
        description: 'Cheesecake con dulce de leche, con base de galleta Lotus.',
        price: 3
    }
];

export const Desserts = () => {
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
