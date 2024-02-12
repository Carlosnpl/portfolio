import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <header>
                <h1>¡Escríbeme y hablamos!</h1>
            </header>

            <section>
                <h2>Cubre este formulario para entender tus necesidades y te responderé en menos de 24h</h2>

                <form action="/enviar" >

                    <h3>Tu nombre y apellidos:</h3>
                    <label for="nombre"></label>
                    <input type="text" placeholder="Nombre Apellido1 Apellido2"/>

                    <h3>Correo Electrónico:</h3>
                    <label for="email"></label>
                    <input type="text" placeholder="correo@electronico.com"/>

                    <h3>Ásunto:</h3>
                    <label for="asunto"></label>
                    <input type="text" placeholder="Cuentame el motivo de tu consulta"/>

                    <h3>Mensaje:</h3>
                    <label for="mensaje"></label>
                    <textarea type="text" rows="3" placeholder="Mensaje, explicame con detall qué necesitas"></textarea>

                    <br/><button type="submit">Enviar</button>

                </form>

            </section>

            <section>
                <h2>Información de Contacto</h2>
                <p>Correo Electrónico: cpl00@iesemilidarder.com</p>
                <p>Teléfono: +123 456 789</p>
            </section>


        </div>
    )
}