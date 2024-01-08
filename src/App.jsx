import { Outlet } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false)

  const darkTheme = createTheme({
    palette: {
      mode: darkMode? 'dark': 'light',
    },
  });

 

  return (
    <>

      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <MainLayout darkMode={darkMode} setDarkMode={setDarkMode} >
          <Outlet />
        </MainLayout>
      </ThemeProvider>




    </>
  )
}

export default App
