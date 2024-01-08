import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
// import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
// import { darkTheme } from './Utils/Themes/Themes.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={darkTheme}> */}
        <CssBaseline/>
   
   <RouterProvider router={Router}>

   </RouterProvider>
   {/* </ThemeProvider> */}

 
  </React.StrictMode>
)
