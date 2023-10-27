import { Box } from '@mui/material'
import React from 'react'

function NextFiveDays({setGrados,dataWeek}) {
   
  //datos dia1
  const min1 = dataWeek==''?'':dataWeek.list[1].main.temp_min
  const max1 = dataWeek==''?'':dataWeek.list[1].main.temp_max
  const img1 = dataWeek==''?'':dataWeek.list[1].weather[0].icon
  // const date1 = dataWeek==''?'':Date.parse(dataWeek.list[1].dt_txt)

  //datos dia2
  const min2 = dataWeek==''?'':dataWeek.list[9].main.temp_min
  const max2 = dataWeek==''?'':dataWeek.list[9].main.temp_max
  const img2 = dataWeek==''?'':dataWeek.list[9].weather[0].icon

  //datos dia3
  const min3 = dataWeek==''?'':dataWeek.list[17].main.temp_min
  const max3 = dataWeek==''?'':dataWeek.list[17].main.temp_max
  const img3 = dataWeek==''?'':dataWeek.list[17].weather[0].icon

  //datos dia4
  const min4 = dataWeek==''?'':dataWeek.list[25].main.temp_min
  const max4 = dataWeek==''?'':dataWeek.list[25].main.temp_max
  const img4 = dataWeek==''?'':dataWeek.list[25].weather[0].icon

  //datos dia5
  const min5 = dataWeek==''?'':dataWeek.list[33].main.temp_min
  const max5 = dataWeek==''?'':dataWeek.list[33].main.temp_max
  const img5 = dataWeek==''?'':dataWeek.list[33].weather[0].icon

  //  console.log(dataWeek==null?dataWeek.list[1].main.temp_min:'');
  return (
    <Box sx={{pt: '13%', pl:'8%'}}>
      <div className='change-units'> 
      <button onClick={()=>{setGrados('imperial')}} className='farenheits'>F</button>
      <button onClick={()=>{setGrados('metric')}} className='Celsius'>C</button>
      </div>
          <div className='container-week'>
            <Box className='card-day'>
                <p>Tomorrow</p>
                <img src={`./img/${img1}.png`} alt="" className='img-week'/>
                <div className='grados-week'>
                  <p>{Math.round(max1)}</p>
                  <p>{Math.round(min1)}</p>
                </div>
            </Box >
            <Box className='card-day'>
            <p>Day</p>
            <img src={`./img/${img2}.png`} alt="" className='img-week'/>
            <div className='grados-week'>
                  <p>{Math.round(max2)}</p>
                  <p>{Math.round(min2)}</p>
                </div>
            </Box>
            <Box className='card-day'>
            <p>Day</p>
            <img src={`./img/${img3}.png`} alt="" className='img-week'/>
            <div className='grados-week'>
                  <p>{Math.round(max3)}</p>
                  <p>{Math.round(min3)}</p>
                </div>
            </Box>
            <Box className='card-day'>
            <p>Day</p>
            <img src={`./img/${img4}.png`} alt="" className='img-week'/>
            <div className='grados-week'>
                  <p>{Math.round(max4)}</p>
                  <p>{Math.round(min4)}</p>
                </div>
            </Box>
            <Box className='card-day'>
            <p>Day</p>
            <img src={`./img/${img5}.png`} alt="" className='img-week'/>
            <div className='grados-week'>
                  <p>{Math.round(max5)}</p>
                  <p>{Math.round(min5)}</p>
                </div>
            </Box>
          </div>
          
          </Box>
  )
}

export default NextFiveDays