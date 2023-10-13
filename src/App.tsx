
import './App.css'
import MenuBar from './components/AppBar'
import ImageCard from './components/Card'
import room from './assets/Room-1.jpg'
import breakfast from './assets/Breakfast.jpg'
import view from './assets/drink.jpg'
import { Box, TextField, Typography } from '@mui/material'
function App() {

  return (
    <>
     <MenuBar />
     <Box
      sx={{
        width: 800,
        maxWidth: '100%',
        marginTop:'20%',
        marginLeft:'30%',
        
      }}
    >
      <Typography sx={{fontSize:'50px',color:'whitesmoke', fontWeight:'800'}}>Welcome to Bahirdar Hostel
</Typography>
      
    </Box>
     <div className='image'>
     <ImageCard title={room} />
     <ImageCard title={breakfast}/>
     <ImageCard title={view}/>
     </div>
     
    </>
  )
}

export default App
