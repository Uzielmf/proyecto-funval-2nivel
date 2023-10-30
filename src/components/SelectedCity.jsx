import { Box, Icon, Input, SvgIcon } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import PlaceIcon from '@mui/icons-material/Place';
import React from 'react'
import SearchLocation from './SearchLocation';
import NavListDrawer from './NavListDrawer';

function SelectedCity({getLocation ,getData, climaActual, city, imgToday, setCity, grados, setLon, setLat }) {
  const grado = grados=='metric'?'C':'F'
  return (
    <div className='selected-city'>
      <img className='fondo-selected-city' src='./img/Cloud-background.png' alt="" />
          <Box sx={{m:'8% 12%',display:'flex', justifyContent:'space-between'}}>
          <SearchLocation setCity={setCity}></SearchLocation>
        <div onClick={()=>{getLocation()}} >{<GpsFixedIcon sx={{width:'20px', height:'20px', borderRadius:'60px' , background:'rgba(255, 255, 255, 0.2)', p:'7px', color:'rgba(231, 231, 235, 1)'}}/>}</div>

        </Box>
        

        <Box className='data-today'>
          <img src="" alt="" />
          
          <Box className=''>
          <img src={`./img/${imgToday}.png`} className='more-padding' alt="" />
          <h2 className='grados-today more-padding'>{Math.round(climaActual?.main.temp)}<small className='letter-small letter-gray'>º{grado}</small></h2>
          <h2 className='letter-gray more-padding'>{climaActual?.weather[0].description}</h2>

            <Box className=''>
              <p>Today   .   Mon. Oct 30</p>
              <p>{<PlaceIcon sx={{color:'rgba(136, 134, 157, 1)'}}></PlaceIcon>} {city}</p>
              </Box>        
          </Box>
        </Box>
        </div>
  )
}

export default SelectedCity