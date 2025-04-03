import { A } from "@solidjs/router"
import { Fieldset } from "../../components/fieldset/fieldset"
import { Input } from "../../components/input/input"
import './login.css'

export const Login = () => {
    return (
        <>
            <form action="/burgers">
                <Fieldset>
                    <Input name="user" type="text">Usuario o Tel&eacute;fono</Input>
                    <Input name="password" type="password">Contrase&ntilde;a</Input>
                    <div class="flex forgot-section">
                        <img src="/lock.png" alt="desbloquear" />
                        <div class="poppins-bold forgot-password">Olvidaste tu Contrase&ntilde;a?</div>
                    </div>
                    <button class="poppins-bold">Login</button>
                </Fieldset>
            </form>
            <div class="sign-up-link flex flex-column">
                <div class="no-account poppins-bold">No tienes una cuenta?</div>
                <A href="/registrate">
                    <button class="btn btn-register poppins-bold">Registrate</button>
                </A>
            </div>
        </>
    )

}
