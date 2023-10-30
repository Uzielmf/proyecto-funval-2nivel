import { Box } from '@mui/material'
import React from 'react'
import ExploreIcon from '@mui/icons-material/Explore';

function DatosToday({climaActual, porcentaje}) {
  return (
    <Box sx={{pl:'10%'}}>
          <p>Today's Hightlights</p>
          
          <Box sx={{color:'white'}} className='container-details'>
          
          <Box className='card-name'>
            <h4 className='letter-gray'>Wind status</h4>
            <p className='big-letter less-margin'>{climaActual?.wind.speed}<small className='letter-small'>mph</small></p>
            <p><ExploreIcon/> WSW</p>
          </Box>

          <Box className='card-name2'>
            <h4 className='letter-gray '>Humidity</h4>
            <p className='big-letter less-margin'>{porcentaje}<small className='letter-small'>%</small></p>
            <div className='porcentaje-levels'>
              <small className='letter-gray'>0</small>
              <small className='letter-gray'>50</small>
              <small className='letter-gray'>100</small>
              </div>
            <div className='porcentaje' style={{width:`${porcentaje}%`}}>
            </div>
            
            
          </Box>

          <Box className='card-name'>
            <h5 className='letter-gray'>Visibility</h5>
            <p className='big-letter less-margin'> {Math.round(climaActual?.visibility)} <small className='letter-small'>miles</small></p>
          </Box>
          
          <Box className='card-name'>
            <h5 className='letter-gray'>Air Pressure</h5>
            <p className='big-letter less-margin'>{climaActual?.main.pressure} <small className='letter-small'>mb</small></p>
          </Box>
          
          </Box>
          
          
          </Box>
  )
}

export default DatosToday