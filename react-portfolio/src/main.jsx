import React from 'react'
import ReactDOM from 'react-dom/client'
import{createBrowserRouter, RouterProvider} from 'react-router-dom';

// Import pages 
import App from './App';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

//Routes 
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index:true,
        element:<About/>
      },
      {
        path:'Portfolio',
        element: <Portfolio/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
