import { Box, Icon, Input, SvgIcon } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import PlaceIcon from '@mui/icons-material/Place';
import React from 'react'
import SearchLocation from './SearchLocation';
import NavListDrawer from './NavListDrawer';

function SelectedCity({getData, climaActual, city, imgToday, setCity}) {
  return (
    <div className='selected-city'>
          <Box sx={{m:'8% 12%',display:'flex', justifyContent:'space-between'}}>
          <SearchLocation setCity={setCity}></SearchLocation>
        <button>{<GpsFixedIcon sx={{width:'20px', borderRadius:'60' , background:'rgba(255, 255, 255, 0.2)'}}/>}</button>

        </Box>
        

        <Box className='data-today'>
          <img src="" alt="" />
          
          <Box className=''>
          <img src={`/public/${imgToday}.png`} className='more-padding' alt="" />
          <h2 className='grados-today more-padding'>{climaActual?.main.temp}</h2>
          <h2 className='letter-gray more-padding'>{climaActual?.weather[0].description}</h2>

            <Box className=''>
              <p>Today   .   Fecha del dia</p>
              <p>{<PlaceIcon sx={{color:'rgba(136, 134, 157, 1)'}}></PlaceIcon>} {city}</p>
              </Box>        
          </Box>
        </Box>
        </div>
  )
}

export default SelectedCity