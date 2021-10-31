import logo from './logo.svg';
import './App.css';
import './assets/componentes/css/cssIndex.css'
import './assets/componentes/css/iPadCss.css'
import './assets/componentes/css/pcCss.css'
import { Nav } from './DetalleIndex/Nav/NavBotones';
import { Productos } from './DetalleIndex/PrimeraColumna/Productos jsx/Productos';
import LogoMaxi from './assets/componentes/Imagenes/Logo maxi pizzas.png';


function App() {
  return (
<div className="Container">
<header><img src={LogoMaxi} title="Logo" alt="Logo"/></header>
<Nav></Nav>
<Productos></Productos>

</div>

  );
}

export default App;
