import React from 'react'
import ReactDOM from 'react-dom/client'
import{createBrowserRouter, RouterProvider} from 'react-router-dom';

// Import pages 
import App from './App';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

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
      },
      {
        path:'Contact',
        element: <Contact/>
      },
      {
        path:'Resume',
        element:<Resume/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
