import { Box } from '@mui/material'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Box width='400px' sx={{width: {xl:'1488px'}}} m='auto'>
        <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App
