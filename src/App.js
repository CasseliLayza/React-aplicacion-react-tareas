import "./App.css";
import ListaDeTareas from "./componentes/ListaDeTareas";
import LogoFreeCodeCamp from "./componentes/LogoFreeCodeCamp";

function App() {
  return (
    <div className="aplicacion-tareas">
      <LogoFreeCodeCamp />
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
