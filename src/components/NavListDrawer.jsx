import { Box, Input, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import Icon from '@mui/material/Icon';
import SearchIcon from '@mui/icons-material/Search';



function NavListDrawer({setCity}) {
    const [newCity, setNewCity] = useState('')
  return (
    <Box sx={{
        height:'100vh',
        width:'20rem', 
        bgcolor:'rgba(30, 33, 58, 1)' ,
        color:"rgba(231, 231, 235, 1)"}}>
        <nav>
            <List>

            <ListItem>
                    <form className='div-search'>
                    <Input sx={{border: '1px solid rgba(97, 100, 117, 1)',
                        color:'rgba(97, 100, 117, 1)'}} placeholder='Icono - search location' onChange={(e)=>{setNewCity(e.target.value)
                    console.log(newCity);}}/> 
                    
                    <div className='icono-search' onClick={(e)=>{
                        e.preventDefault()
                        setCity(newCity)
                        }
                        }>{<SearchIcon sx={{pt:"3px", pl:'.3rem'}}/>}</div>
                    </form>
                </ListItem>

                <ListItem>
                    <ListItemButton  component="button" sx={{border: '1px solid rgba(97, 100, 117, 1)'}}>
                    <ListItemText primary="London" onClick={()=>setCity('london')}/>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton component="button" sx={{border: '1px solid rgba(97, 100, 117, 1)'}}>
                    <ListItemText primary="Barcelona" onClick={()=>setCity('barcelona')}/>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton component="button" sx={{border: '1px solid rgba(97, 100, 117, 1)'}}>
                    <ListItemText primary="Long Beach" onClick={()=>setCity('long beach')}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    </Box>
  )
}

export default NavListDrawer