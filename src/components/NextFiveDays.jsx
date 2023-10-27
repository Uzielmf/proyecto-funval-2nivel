import { Box } from '@mui/material'
import React from 'react'

function NextFiveDays({setGrados,dataWeek}) {
  
  const options = { day: 'numeric', month: 'short', year: 'numeric'};

  //datos dia1
  const min1 = dataWeek==''?'':dataWeek.list[1].main.temp_min
  const max1 = dataWeek==''?'':dataWeek.list[1].main.temp_max
  const img1 = dataWeek==''?'':dataWeek.list[1].weather[0].icon
  

  //datos dia2
  const min2 = dataWeek==''?'':dataWeek.list[9].main.temp_min
  const max2 = dataWeek==''?'':dataWeek.list[9].main.temp_max
  const img2 = dataWeek==''?'':dataWeek.list[9].weather[0].icon
  const date2 = dataWeek==''?'':dataWeek.list[9].dt_txt
  const fecha2 = new Date(date2)
  const fechaFormateada2 = fecha2.toLocaleDateString('en-US', options);

  //datos dia3
  const min3 = dataWeek==''?'':dataWeek.list[17].main.temp_min
  const max3 = dataWeek==''?'':dataWeek.list[17].main.temp_max
  const img3 = dataWeek==''?'':dataWeek.list[17].weather[0].icon
  const date3 = dataWeek==''?'':dataWeek.list[17].dt_txt
  const fecha3 = new Date(date3)
  const fechaFormateada3 = fecha3.toLocaleDateString('en-US', options);


  //datos dia4
  const min4 = dataWeek==''?'':dataWeek.list[25].main.temp_min
  const max4 = dataWeek==''?'':dataWeek.list[25].main.temp_max
  const img4 = dataWeek==''?'':dataWeek.list[25].weather[0].icon
  const date4 = dataWeek==''?'':dataWeek.list[25].dt_txt
  const fecha4 = new Date(date4)
  const fechaFormateada4 = fecha4.toLocaleDateString('en-US', options);

  //datos dia5
  const min5 = dataWeek==''?'':dataWeek.list[33].main.temp_min
  const max5 = dataWeek==''?'':dataWeek.list[33].main.temp_max
  const img5 = dataWeek==''?'':dataWeek.list[33].weather[0].icon
  const date5 = dataWeek==''?'':dataWeek.list[33].dt_txt
  const fecha5 = new Date(date5)
  const fechaFormateada5 = fecha5.toLocaleDateString('en-US', options);

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
            <p>{fechaFormateada2}</p>
            <img src={`./img/${img2}.png`} alt="" className='img-week'/>
            <div className='grados-week'>
                  <p>{Math.round(max2)}</p>
                  <p>{Math.round(min2)}</p>
                </div>
            </Box>
            <Box className='card-day'>
            <p>{fechaFormateada3}</p>
            <img src={`./img/${img3}.png`} alt="" className='img-week'/>
            <div className='grados-week'>
                  <p>{Math.round(max3)}</p>
                  <p>{Math.round(min3)}</p>
                </div>
            </Box>
            <Box className='card-day'>
            <p>{fechaFormateada4}</p>
            <img src={`./img/${img4}.png`} alt="" className='img-week'/>
            <div className='grados-week'>
                  <p>{Math.round(max4)}</p>
                  <p>{Math.round(min4)}</p>
                </div>
            </Box>
            <Box className='card-day'>
            <p>{fechaFormateada5}</p>
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