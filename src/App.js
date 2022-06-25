import "./Styles/App.css";
import Boton from "./Components/Boton";
import Pantalla from "./Components/Pantalla";
import { useState } from "react"
import Botonc from "./Components/Botonc";
import {evaluate} from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const agregarInput = val => {
    setInput(input + val);
  };

  const resultado = () => {
      
    if (input.length > 60 || input.length === Infinity || input.length === null || input.length === undefined) {
        setInput("Syntax Error");
      }else{
        setInput(evaluate(input));
      }
  };

  return (
    <div className="App">
      <h1 className="title">Calculadora Simple</h1>
      <div className="Contenedor">
      <div>
        <Pantalla input = {input}/>
      </div>
      <div className="Fila">
          <Botonc manejarClear={() => setInput("")}>C</Botonc>
          <Boton manejarClic={agregarInput}>%</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="Fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="Fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="Fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="Fila">
          <Botonc manejarResultado={resultado}>=</Botonc>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
        </div>
      </div>
    </div>
  );
}
export default App;