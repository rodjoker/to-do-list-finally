import { Menu } from "./components/Menu";
import { Container, Flex, Spacer } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Suspense } from "react";
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Experience from './pages/Experience';
import Diary from "./pages/Diary";
import './App.css'
function App() {
  

  return (
    <>
   <BrowserRouter>
    <Menu />
      <Box >
       <Center  >
        
         <Suspense fallback = 'loading'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme/>} />
          <Route path="/experiencia" element={<Experience/>} />
          <Route path="/diary" element={<Diary/>} />
        </Routes>
        </Suspense>
       </Center>
      </Box>
    </BrowserRouter>
    </>
  )
}

export default App
