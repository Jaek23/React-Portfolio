// Import 'react-router-dom'
import{Outlet} from 'react-router-dom'
// Import components 
import Header from './components/Header';
import Footer from './components/Footer';
// Import bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
