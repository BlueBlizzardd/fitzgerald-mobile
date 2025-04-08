import { Fieldset } from "../../components/fieldset/fieldset"
import { Input } from "../../components/input/input"

export const SignUp = () => {
    return (
        <form action="/burgers">
            <Fieldset>
                <Input name="name" type="text">Nombre y Apellido</Input>
                <Input name="phone" type="number">Tel&eacute;fono</Input>
                <Input name="password" type="password">Contrase&ntilde;a</Input>
                <Input name="confirm" type="password">Confirmar Contrase&ntilde;a</Input>
                <button class="poppins-bold">Reg&iacute;strate</button>
            </Fieldset>
        </form>
    )
}
