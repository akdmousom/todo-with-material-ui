import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import App from "../App";
import Service from "../Pages/Service/Service";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'service',
                element: <Service/>
            }
        ]
    }
])

export default Router;