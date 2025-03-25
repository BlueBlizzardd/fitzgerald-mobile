import { ParentComponent, JSX } from 'solid-js'
import './input.css'

type InputProps = JSX.InputHTMLAttributes<HTMLInputElement> & { name: string };

export const Input: ParentComponent<InputProps> = (props) => {
    return (
        <div class='form-input'>
            <label for={props.name} class="form-label anton-regular">{props.children}</label>
            <div class="form-input-container">
                <input id={props.name} name={props.name} type={props.type} />
                <div class="form-after-input"></div>
            </div>
        </div>
    )
}
