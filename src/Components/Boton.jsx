import "../Styles/Boton.css"

function Boton (props){

  return(
    <button className="Boton" onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </button>
  )
};

export default Boton;