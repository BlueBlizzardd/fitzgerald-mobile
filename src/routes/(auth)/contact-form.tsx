import { Fieldset } from "../../components/fieldset/fieldset"
import { Input } from "../../components/input/input"

export const ContactForm = () => {
    return (
        <form action="post">
            <Fieldset>
                <Input name="name" type="text">Nombre y Apellido</Input>
                <Input name="phone" type="number">Tel&eacute;fono</Input>
                <Input name="email" type="email">Correo</Input>
                <Input name="message" type="text">Mensaje</Input>
                <button class="poppins-bold">Enviar</button>
            </Fieldset>
        </form>
    )
}
