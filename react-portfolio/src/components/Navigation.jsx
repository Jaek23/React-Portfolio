//Navigation bar 
const Navigation = () =>{
    return(
        <nav className="navbar navbar-expand-lg d-flex justify-content-center ">
            <div>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">About Me</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Resume</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navigation