import { Box } from '@mui/material'
import React from 'react'

function DatosToday({climaActual, porcentaje}) {
  return (
    <Box sx={{pl:'10%'}}>
          <p>la ciudad que esta buscando es {climaActual==null ? 'no hay ciudad elegida':climaActual.name}</p>
          
          <Box sx={{color:'white'}} className='container-details'>
          
          <Box className='card-name'>
            <h4 className='letter-gray'>Wind status</h4>
            <p className='big-letter less-margin'>{climaActual?.wind.speed} <small>mph</small></p>
            <p>icono WSW</p>
          </Box>

          <Box className='card-name2'>
            <h4 className='letter-gray '>Humidity</h4>
            <p className='big-letter less-margin'>{porcentaje}%</p>
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
            <p className='big-letter less-margin'> {climaActual?.visibility} <small>miles</small></p>
          </Box>
          
          <Box className='card-name'>
            <h5 className='letter-gray'>Air Pressure</h5>
            <p className='big-letter less-margin'>{climaActual?.main.pressure} <small>mb</small></p>
          </Box>
          
          </Box>
          
          
          </Box>
  )
}

export default DatosToday