/* @refresh reload */
import { render } from 'solid-js/web'
import { Route, Router } from '@solidjs/router'
import App from './App.tsx'
import { Home } from './routes/(menus)/home.tsx'
import './index.css'
import { Login } from './routes/(auth)/login.tsx'
import { SignUp } from './routes/(auth)/sign-up.tsx'
import { ContactForm } from './routes/(auth)/contact-form.tsx'
import { Burgers } from './routes/(menus)/burgers.tsx'
import { ProductsLayout } from './routes/(menus)/_products-layout.tsx'
import { CartProvider } from './context/cart/cart.tsx'
import { Extras } from './routes/(menus)/extras.tsx'
import { Drinks } from './routes/(menus)/drinks.tsx'
import { Desserts } from './routes/(menus)/desserts.tsx'

const root = document.getElementById('root')

render(() => (
    <CartProvider>
        <Router root={App}>
            <Route path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/registrate' component={SignUp} />
            <Route path='/contacto' component={ContactForm} />
            <Route component={ProductsLayout}>
                <Route path='/burgers' component={Burgers} />
                <Route path='/extras' component={Extras} />
                <Route path='/bebidas' component={Drinks} />
                <Route path='/postres' component={Desserts} />
            </Route>
        </Router>
    </CartProvider>
), root!)
