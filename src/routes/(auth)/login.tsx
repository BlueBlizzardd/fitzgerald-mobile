import { Fieldset } from "../../components/fieldset/fieldset"

export const Login = () => {
    return (
        <form action="post">
            <Fieldset>
                <label for="user" class="label">Usuario o Tel&eacute;fono</label>
                <input id="user" name="user" type="text" />
                <label for="password" class="label">Contrase&ntilde;a</label>
                <input id="password" name="password" type="password" />
                <button>Login</button>
            </Fieldset>
        </form>
    )

}
