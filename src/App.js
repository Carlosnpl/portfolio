import './App.css';
import Landing from './Landing/Landing';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import News from './Newsletter/News';
import Menu from './Menu/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Un componente:
// Una funcion que empieza por letra mayuscula
// Tiene un return y el contenido del return sera codigo jsx
// Por cada componente tendremos un archivo que empezara por mayuscula y tendra el mismo nombre que el compnoente
// Para poder usarlo lo exportamos y lo importamos donde queramos usarlo

// Meter cada componente en una carpeta con el mismo nombre y su archivo CSS.
// Todas estas carpetas meterlas en otra carpeta llamada components.
// Darle estilo.
// Borrar comentarios
// Subirlo a github
// Eliminar imports que no estamos utilizando (Te lo chiva en la terminal)

function App() {
  
  return (
    <Router>
      {/* <Header/> */}
      {/* <Navigation/> */}
      <Menu />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;