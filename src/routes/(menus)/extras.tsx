import { For } from "solid-js";
import { Item } from "../../components/items/items";

const items = [
    {
        title: 'Nuggets Nochicken',
        description: 'Nuggets hechos a base de proteina de soja.',
        price: 4
    },
    {
        title: 'Nuggets',
        description: 'Medallones de pollo acompañados de salsa Fitz.',
        price: 4
    },
    {
        title: 'Alitas de Pollo',
        description: 'Alitas de pollo picantes, acompañadas de salsa BBQ.',
        price: 4
    },
    {
        title: 'Papitas Fritas',
        description: '100gr de papas, acompañados de salsa Fitz.',
        price: 3
    },
    {
        title: 'Ignacios Guacamole',
        description: 'Nachos acompañados de guacamole al estilo mexicano.',
        price: 6
    }
];

export const Extras = () => {
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
