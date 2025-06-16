'use client' 
import { use, useState } from "react";

interface Persona{
  nombre : string,
  apellido : string,
  edad : String
}
let initialStatePersona:Persona = {
  nombre : "",
  apellido : "",
  edad : ""
}
export default function Home() {

  const [persona, setPersona] = useState(initialStatePersona)
  const handlePersona = (name:string,value:string)=>{
    //validaciones
    setPersona(
      {...persona,[name]:value}
    )
  }
  return (
    <form>
      <h1>Hola {persona.nombre} {persona.apellido} {persona.edad}</h1>
      <label>Nombre</label><br />
      <input 
      name="nombre"
      type="text"
      placeholder="Ingresar Nombre" 
      onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/><br />
      <span></span><br />

      <label>Apellido</label><br />
      <input 
      name="apellido"
      type="text" 
      placeholder="Ingresar Apellido"     
      onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/><br />
      <span></span><br />

      <label>Edad</label><br />
      <input 
      name="edad"
      type="text" 
      placeholder="Ingresar Edad"     
      onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/><br />
      <span></span><br />
      <button>Registrar</button>
    </form>
  );
}
