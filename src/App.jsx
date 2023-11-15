import { Menu } from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Suspense } from "react";
import './App.css'
import React from "react";
const Home = React.lazy(() => import('./pages/Home'));
const Aboutme = React.lazy(() => import('./pages/Aboutme'));
const Experience = React.lazy(() => import('./pages/Experience'));
const Diary = React.lazy(() => import('./pages/Diary'));

function App() {
  return (
    <>
   <BrowserRouter>
    <Menu /> <br/><br/>
      <Box >
       <Center  >       
        <Suspense fallback = 'loading'>        
         <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/aboutme" element={<Aboutme/> } />
          <Route path="/experiencia" element={<Experience/> } />
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
