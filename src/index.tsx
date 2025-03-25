/* @refresh reload */
import { render } from 'solid-js/web'
import { Route, Router } from '@solidjs/router'
import App from './App.tsx'
import { Home } from './routes/(menus)/home.tsx'
import './index.css'

const root = document.getElementById('root')

render(() => (
    <Router root={App}>
        <Route path='/' component={Home} />
    </Router>
), root!)
