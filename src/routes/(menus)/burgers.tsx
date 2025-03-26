import { For } from "solid-js"
import { Item } from "../../components/items/items";
import './burgers.css'

const items = [
    {
        title: 'Fitzgerald',
        description: 'Doble queso cheddar, cebolla roja, pepinillos, bacon y salsa Fitz.',
        price: 6
    },
    {
        title: 'Rockefeller',
        description: 'Burger con lechuga, tomate, cebolla roja, cheddar, bacon y nuestra salsa secreta Fitz.',
        price: 5
    },
    {
        title: 'Minetta Dry (230GR)',
        description: 'Doble burger, queso raciette, cebolla caramelizada, bacon y salsa Bourbon.',
        price: 8
    },
    {
        title: 'Snoopy',
        description: 'Burger falafel con guacamole, queso feta, relish, lechuga y salsa ranch.',
        price: 6
    },
    {
        title: 'Amelie',
        description: 'Burger de pollo con queso brie, cebolla caramelizada y salsa de miel y mostaza.',
        price: 7
    }
];

export const Burgers = () => {
    return (
        <div class='featured-container flex flex-column'>
            <For each={items}>
                {(item) =>
                    <Item title={item.title} description={item.description} price={item.price} image='/Burger.png' />
                }
            </For>
        </div>
    )
}
