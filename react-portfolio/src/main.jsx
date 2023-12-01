import React from 'react'
import ReactDOM from 'react-dom/client'
import{createBrowserRouter, RouterProvider} from 'react-router-dom';

// Import pages 
import App from './App';

//Routes 
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  }
])













ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
