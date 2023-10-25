import { Box } from '@mui/material'
import React from 'react'

function NextFiveDays({setGrados}) {
  return (
    <Box sx={{pt: '13%', pl:'8%'}}>
      <div className='change-units'> 
      <button onClick={()=>{setGrados('imperial')}} className='farenheits'>F</button>
      <button onClick={()=>{setGrados('metric')}} className='Celsius'>C</button>
      </div>
          <div className='container-week'>
            <Box className='card-day'>
                <p>Day</p>
                <img src="" alt="" />
                <div>
                  <p>Maxima G</p>
                  <p>Minima G</p>
                </div>
            </Box >
            <Box className='card-day'>
            <p>Day</p>
                <img src="" alt="" />
                <div>
                  <p>Maxima G</p>
                  <p>Minima G</p>
                </div>
            </Box>
            <Box className='card-day'>
            <p>Day</p>
                <img src="" alt="" />
                <div>
                  <p>Maxima G</p>
                  <p>Minima G</p>
                </div>
            </Box>
            <Box className='card-day'>
            <p>Day</p>
                <img src="" alt="" />
                <div>
                  <p>Maxima G</p>
                  <p>Minima G</p>
                </div>
            </Box>
            <Box className='card-day'>
            <p>Day</p>
                <img src="" alt="" />
                <div>
                  <p>Maxima G</p>
                  <p>Minima G</p>
                </div>
            </Box>
          </div>
          
          </Box>
  )
}

export default NextFiveDays