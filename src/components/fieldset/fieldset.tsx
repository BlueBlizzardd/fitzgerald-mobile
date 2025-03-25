import { ParentComponent } from "solid-js"
import './fieldset.css'

export const Fieldset: ParentComponent = (props) => {
    return (
        <fieldset class="fieldset">
            {props.children}
        </fieldset>
    )
}
