'use client' 
import { use, useEffect, useState } from "react";

interface Persona{
  nombre : string,
  apellido : string,
}
let initialStatePersona:Persona = {
  nombre : "",
  apellido : "",
}

export default function Home() {
  const miStorage = window.localStorage
//
  const [persona, setPersona] = useState(initialStatePersona)
  const [personas,setPersonas] = useState<Persona[]>([])
  const [eNombre,setENombre] = useState("")
  useEffect(()=>{
    let listadoStr = miStorage.getItem("personas")
    if (listadoStr != null){
      let listado = JSON.parse(listadoStr)
      setPersona(listado)
    }
  },[])
  const handlePersona = (name:string,value:string)=>{
    //validaciones
    setPersona(
      {...persona,[name]:value}
    )
  };
    const handleRegistrar = ()=>{






      miStorage.setItem("personas",JSON.stringify([...personas,persona]))
  
    }
  
  
  return (
    <form>
      <h1>Hola {persona.nombre} {persona.apellido}</h1>
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
      <button>Registrar</button>
    </form>
  );
}
