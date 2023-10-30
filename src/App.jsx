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
  const [lon,setLon] =useState('')
  const [lat,setLat] =useState('')
  const [link,setLink] =useState()

  const [dataWeek,setDataWeek] = useState('')
    
  const apiKey = 'bafb3bef1ccb9f00b7567afab00a77cf'

  

  const getData = async () =>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${grados}`)
    const datos = await res.json()

    setClimaActual(datos)
    setPorcentaje(datos.main.humidity)
    setImgToday(datos.weather[0].icon)
    
  }

   const getDataWeek = async () => {
     const resWeek = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${grados}`)
     const datosweek = await resWeek.json()
     setDataWeek(datosweek)
   }

  //  const getDataLocation = async (lat, lon) => {
  //   const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  //   const datos = await res.json()

  //   setClimaActual(datos)
  //   setPorcentaje(datos.main.humidity)
  //   setImgToday(datos.weather[0].icon)
  //  }

   const getLocation= ()=>{
    navigator.geolocation.getCurrentPosition(async position => {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
      
      // getDataLocation(lat, lon)
    console.log(lat,lon);
    })

   }

  // const getDataWeek = async () => {
  //   setLon(climaActual.coord?.lon)
  //   setLat(climaActual.coord?.lat)
  //   console.log(lon, lat);
  //   const resWeek = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apiKey}`)
  //   const datosweek = await resWeek.json()
  //   setDataWeek(datosweek)
  // }

  useEffect(()=>{
    getData()
    
    console.log(dataWeek);
  },[])

  useEffect(()=>{
    getDataWeek()
  },[])

  useEffect(()=>{
    getData()
    getDataWeek()
    console.log(dataWeek)
  },[grados])

  useEffect(()=>{
    getData()
    getDataWeek()
    console.log(dataWeek)
  },[city])

  return (
    <>

    {/* Contenedor general */}
      <div className='container-general'> 
      
      <cityContext.Provider value={city}>
        {/* Ciudad Seleccionada */}
        <SelectedCity getLocation={getLocation} getData={getData} climaActual={climaActual} city={city} imgToday={imgToday} setCity={setCity} grados={grados} setLonlon={setLon} setLatlat={setLat}/>

        </cityContext.Provider>
        
        <div className='details'>

          {/* Contenedor del clima de los proximo 5 dias */}
          
          <NextFiveDays setGrados={setGrados} dataWeek={dataWeek} grados={grados}/>


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
