import "../Styles/Botonc.css"

function Botonc (props){
  if (props.children === "C") {
    return(
      <div className="Botonc" onClick={props.manejarClear}>
        {props.children}
      </div>
    )
  }else if(props.children === "="){
    return(
      <div className="Botonc" onClick={props.manejarResultado}>
        {props.children}
      </div>
    )
  }
  
}

export default Botonc;