import './News.css';

export default function News() {
    return (
        <div className="news-container">
            <header>
                <h1>Suscríbete a mi Boletín</h1>
                <p>Recibe las últimas actualizaciones y novedades directamente en tu correo electrónico.</p>
            </header>

            <section>
                <form action="/suscribir">
                    <label for="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" /><br/><br/>
                    <button type="submit">Suscribirse</button>
                </form>
            </section>
        </div>
    )
}