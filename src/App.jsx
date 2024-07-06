import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Flex, Grid, Stack } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Layout1 from './layouts/Layout1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Grid width="100vw" height="100vh" marginLeft={0} marginRight={0}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ 
            <Layout1>
              <Home /> 
            </Layout1>
          } /> 
          <Route path="/page1" element={
            <Layout1>
              <Page1 />
            </Layout1>
          } /> 
        </Routes>
      </BrowserRouter>
    </Grid>
  )
}

export default App
