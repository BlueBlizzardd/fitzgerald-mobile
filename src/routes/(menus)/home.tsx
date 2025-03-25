import { For } from "solid-js"
import { Featured } from "../../components/featured/featured"
import './home.css'

const featuredItems = [
    {
        image: '/Burger.png',
        title: 'La Burger Mas Deseada',
        description: 'Burger de vaca, ketchup, mostaza, cebolla caramelizada, bacon crunchy y salsa cheddar fundida.'
    },
    {
        image: '/Milkshake.png',
        title: 'Milkshake del Mes',
        description: 'Helado con un toque de vainilla, leche, galletas dinosaurio y sirope de chocolate.'
    },
    {
        image: '/Helao.png',
        title: 'Los Mejores Postres',
        description: 'Variedad de postres exquisitos. Te ofrecemos Brownies, cheesecakes y helados.'
    }
]

export const Home = () => {
    return (
        <div class='featured-container flex flex-column'>
            <For each={featuredItems}>
                {(item) =>
                    <Featured title={item.title} description={item.description} image={item.image} />
                }
            </For>
        </div>
    )
}
