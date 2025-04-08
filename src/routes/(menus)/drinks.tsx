import { For } from "solid-js";
import { Item } from "../../components/items/items";
import './drinks.css';

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

const cocktails = [
    {
        title: 'Mojito',
        description: 'Tradicional, Fresa, Coco y Parchita.',
        price: 2
    },
    {
        title: 'Piña Colada',
        description: 'Licor de piña, crema de coco y ron blanco.',
        price: 3
    },
    {
        title: 'Alexandra',
        description: 'Coctel de Brandy con crema de cacao y nata.',
        price: 3
    },
    {
        title: 'Barracuda',
        description: 'Ron dorado, Galiano, Zumo de piña y lima.',
        price: 4
    },
    {
        title: 'Cuba Libre',
        description: 'Ron blanco, Coca-Cola y zumo de lima.',
        price: 3
    },
    {
        title: 'Dejavu',
        description: 'Vodka, mango, fresa, piña, maracuya y sirope de melon.',
        price: 2
    }
]

export const Drinks = () => {
    return (
        <div class="featured-container flex flex-column">
            <div class="grid drinks-grid">
                <For each={items}>
                    {(item) =>
                        <Item title={item.title} description={item.description} price={item.price} image='/Burger.png' />
                    }
                </For>
            </div>
            <div class="item-subtitle anton-regular">Cocteles</div>
            <div class="grid drinks-grid">
                <For each={cocktails}>
                    {(item) =>
                        <Item title={item.title} description={item.description} price={item.price} image='/Burger.png' />
                    }
                </For>
            </div>
        </div>

    )
}
