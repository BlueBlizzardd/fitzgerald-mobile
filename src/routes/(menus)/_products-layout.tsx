import { ParentComponent } from "solid-js";
import { MenuNav } from "../../components/menu-nav/menu-nav";
import './_products-layout.css';

export const ProductsLayout: ParentComponent = (props) => {
    return (
        <>
            {props.children}
            <MenuNav />
        </>
    )

}
