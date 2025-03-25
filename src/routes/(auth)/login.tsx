import { Fieldset } from "../../components/fieldset/fieldset"
import { Input } from "../../components/input/input"

export const Login = () => {
    return (
        <form action="post">
            <Fieldset>
                <Input name="user" type="text">Usuario o Tel&eacute;fono</Input>
                <Input name="password" type="password">Contrase&ntilde;a</Input>
                <button class="poppins-bold">Login</button>
            </Fieldset>
        </form>
    )

}
