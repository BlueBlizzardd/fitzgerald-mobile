import { ParentComponent } from 'solid-js'
import { NavBar } from './components/navbar/navbar'
import { Header } from './components/header/header'

const App: ParentComponent = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <NavBar />
        </>
    )
}

export default App
