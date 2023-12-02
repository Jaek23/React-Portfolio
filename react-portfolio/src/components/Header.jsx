// Imports
import Navigation from "./Navigation"
import '../../style/header.css'

// Header component
const Header = () =>{
    return(
        <div className="header">
            <h1 className="d-flex align-items-center">Jae Kim</h1>
            <Navigation/>
        </div>
    )
}
 export default Header