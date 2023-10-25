import { Box, Button, Drawer, Input } from '@mui/material'
import React, { useState } from 'react'
import NavListDrawer from './NavListDrawer'

function SearchLocation({setCity}) {
    const [open, setOpen] = useState(false)
  return (
    <>
    <Button sx={{
        padding: '0 .6rem',
        borderRadius:'0px',
        fontSize: '.5rem',
        backgroundColor: 'rgba(110, 112, 122, 1)',
        color: 'rgba(231, 231, 235, 1)'
    }} onClick={()=>{ setOpen(true)}}>Search for places</Button>

<Drawer
open={open}
anchor='left'
onClose={() => setOpen(false)}>
  
  <NavListDrawer setCity={setCity}></NavListDrawer>
</Drawer>
</>
  )
}

export default SearchLocation