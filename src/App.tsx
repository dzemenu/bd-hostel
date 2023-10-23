
import './App.css'
import MenuBar from './components/AppBar'
import ImageCard from './components/Card'
import room from './assets/Room-1.jpg'
import breakfast from './assets/Breakfast.jpg'
import view from './assets/drink.jpg'
import { Box, Typography } from '@mui/material'
function App() {

  return (
    <main className='main'>
     <MenuBar />
     <Box
      sx={{
       
        maxWidth: '100%',
       
       display:'flex',
       alignItems:'center',
       justifyContent:'center',
      
      }}
    >
      <Typography sx={{fontSize:'50px',color:'whitesmoke', fontWeight:'800', textAlign:'center'}}>Welcome to Bahirdar Hostel
</Typography>
      
    </Box>
     <div className='image'>
     <ImageCard imageSrc={room} title='Room'/>
     <ImageCard imageSrc={breakfast}title='Breakfast'/>
     <ImageCard imageSrc={view}title='View'/>
     </div>
     <div className='footer'>
 <div className="footer-items">
  <h2>Address</h2>
  <h3>Bahirdar kebele 16</h3>

  <h3>Infront of ayer meda</h3>

 </div>
 <div className="footer-items">
  <h2>Contacts</h2>
  <h3> Mobile: 0002232222</h3>

  <h3>Fax:+251022222</h3>

 </div>
 <div className="footer-items">
  <h2>Services</h2>
  <h3>Shuttle</h3>

  <h3>Tour guide</h3>

 </div>
     </div>
     
    </main>
  )
}

export default App
