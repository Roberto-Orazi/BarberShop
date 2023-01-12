
import './App.css';
import Contacto from './Components/Contacto';
import Galeria from './Components/Galeria';
import Inicio from './Components/Inicio';
import NavBar from './Components/NavBar';
import Servicios from './Components/Servicios';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Inicio/>
      <Servicios/>
      <Galeria/>
      <Contacto/>
    </div>
  );
}

export default App;
