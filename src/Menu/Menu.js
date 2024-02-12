import './Menu.css';
import {
  Link
} from "react-router-dom";


// Cuando usamos otros componente que no vienen de los nuestros, tenemos que importarlos tambien

export default function Menu() {
  return (
    <div className="navbar">
      <div><Link to="/landing">Landing</Link></div>
      <div><Link to="/projects">Proyectos</Link></div>
      <div><Link to="/contact">Contacto</Link></div>
      <div><Link to="/news">newsletter</Link></div>
    </div>
  )
}