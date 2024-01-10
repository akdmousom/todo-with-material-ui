import { Outlet } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';



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
      <Toaster/>
        <CssBaseline/>
        <MainLayout darkMode={darkMode} setDarkMode={setDarkMode} >
          <Outlet />
        </MainLayout>
      </ThemeProvider>




    </>
  )
}

export default App
