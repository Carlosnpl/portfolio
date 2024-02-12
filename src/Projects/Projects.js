import './Projects.css';

const projects = [{
    title: 'Sistema de Gestión de Tareas',
    description: 'Aplicación web para gestionar tareas y recordatorios. Entre sus Funcionalidades se incluyen la adición, edición y eliminación de tareas, así como la clasificación por prioridad y fecha de vencimiento.',
    price: 100
},
{
    title: 'Blog Personal',
    description: 'Blog personal utilizando tecnologías modernas como React y Node.js. Implementé funcionalidades como la creación de publicaciones, comentarios de usuarios y un sistema de etiquetas para categorizar el contenido.',
    price: 1000
},
{
    title: 'Aplicación de Portafolio Personal',
    description: 'Web de portafolio personal utilizando React para mostrar mis habilidades, proyectos y experiencias. Incluí secciones interactivas, como una galería de proyectos y detalles sobre mi formación y habilidades.',
    price: 10000
},
{
    title: 'Juego de Preguntas y Respuestas',
    description: 'Juego interactivo de preguntas y respuestas utilizando tecnologías frontend y backend. Incluí categorías temáticas, puntajes y un sistema de registro de usuarios para seguir su progreso..',
    price: 10000
}

]

// Como pintar un array de objetos
// Que es un array
// Que es un objeto
// Como acceder a las keys de un objeto
// Como iterar un array
// Como iterar un array dentro de un componente

// Renderizado Condicional
// Si el precio es menor de 5000 que aparezca en la card del proyecto: Con descuento

export default function Projects() {
    return (
        <div>
            <div className='landing-container2'>
                {
                    projects.map(project => {
                        return (<div className="column2">
                            <h1>{project.title}</h1>
                            <p>{project.description}</p><br/>
                            <p className='precio'>{project.price} €{ project.price < 5000 && <div>Precio reducido</div>}</p>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

