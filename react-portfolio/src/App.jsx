// Import 'react-router-dom'
import{Outlet} from 'react-router-dom'
// Import components 
import Header from './components/Header';
import Footer from './components/Footer';
// Import bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";
// Import CSS
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
