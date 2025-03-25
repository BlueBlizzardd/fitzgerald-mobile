/* @refresh reload */
import { render } from 'solid-js/web'
import { Route, Router } from '@solidjs/router'
import App from './App.tsx'
import { Home } from './routes/(menus)/home.tsx'
import './index.css'
import { Login } from './routes/(auth)/login.tsx'
import { SignUp } from './routes/(auth)/sign-up.tsx'
import { ContactForm } from './routes/(auth)/contact-form.tsx'

const root = document.getElementById('root')

render(() => (
    <Router root={App}>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/registrate' component={SignUp} />
        <Route path='/contacto' component={ContactForm} />
    </Router>
), root!)
