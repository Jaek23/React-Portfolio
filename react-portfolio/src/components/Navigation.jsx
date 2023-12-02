import {Link, useLocation} from 'react-router-dom'

//Navigation bar 
function Navigation() {
    const currentPage = useLocation().pathname;

    return(
        <nav className="navbar navbar-expand-lg  ">
            <div>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                    <Link 
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >About Me
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link 
                    to="/Portfolio"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >Portfolio
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link 
                    to="/Contact"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >Contact
                    </Link>
                    </li>

                    <li className="nav-item">
                    <Link 
                    to="/Resume"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >Resume
                    </Link>
                    </li>

                </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navigation