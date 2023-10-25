import React, { useEffect, useState } from 'react'
import './App.css'
import { Box, Button } from '@mui/material'
import SelectedCity from './components/SelectedCity'
import NextFiveDays from './components/NextFiveDays'
import DatosToday from './components/DatosToday'

export const cityContext = React.createContext()

function App() {
  const [climaActual, setClimaActual] = useState(null)
  const [city,setCity] = useState('Guadalajara')
  const [porcentaje,setPorcentaje] = useState(40)
  const [grados,setGrados] = useState('metric')
  const [imgToday,setImgToday] = useState('')

  const apiKey = 'bafb3bef1ccb9f00b7567afab00a77cf'

  const getData = async () =>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${grados}`)
    const datos = await res.json()
    setClimaActual(datos)
    setPorcentaje(datos.main.humidity)
    setImgToday(datos.weather[0].icon)
    console.log(climaActual);
  }

  const changeCity = (e)=>{
    e.eventPreventDefault()

  }

  useEffect(()=>{
    getData()
    console.log(climaActual);
  },[])

  useEffect(()=>{
    getData()
  },[grados])

  useEffect(()=>{
    getData()
  },[city])

  return (
    <>

    {/* Contenedor general */}
      <div className='container-general'> 
      
      <cityContext.Provider value={city}>
        {/* Ciudad Seleccionada */}
        <SelectedCity getData={getData} climaActual={climaActual} city={city} imgToday={imgToday} setCity={setCity}/>

        </cityContext.Provider>
        
        <div className='details'>

          {/* Contenedor del clima de los proximo 5 dias */}
          
          <NextFiveDays setGrados={setGrados}/>


          {/* Contenedor de los datos del clima del dia */}
          
          <div className='datos-today'>
          <DatosToday climaActual={climaActual} porcentaje={porcentaje}/>
          </div>



        </div>


      </div>
    </>
  )
}

export default App
