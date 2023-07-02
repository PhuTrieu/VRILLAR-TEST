import { Box } from '@mui/material'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import ScrolltoTop from './components/Scroll/ScrolltoTop'

function App() {
  return (
    <Box width='100%' m='auto'>
        <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
        <ScrolltoTop visible={250}/>
        <Footer/>
    </Box>
  )
}

export default App
