import '../../style/Portfolio.css'

const Portfolio = () =>{
    return(
        <>
        <div className='container'>
        <div className='wrapper'>
        <div className="card">
            <div className="cardBody">
                <img src="https://www.mavs.com/wp-content/uploads/2020/04/Mavs-Facebook.jpg" alt=""  className='cardImage'/>
                <h2 className="cardTitle">Project 1</h2>
                <p className="cardDescription">Short description about the project</p>
            </div>
            <button className="cardBtn">Deployed Link</button>
            <button className="cardBtn">GitHub Repository</button>
        </div>
        </div>

        <div className='wrapper'>
        <div className="card">
            <div className="cardBody">
                <img src="https://www.mavs.com/wp-content/uploads/2020/04/Mavs-Facebook.jpg" alt=""  className='cardImage'/>
                <h2 className="cardTitle">Project 2</h2>
                <p className="cardDescription">Short description about the project</p>
            </div>
            <button className="cardBtn">Deployed Link</button>
            <button className="cardBtn">GitHub Repository</button>
        </div>
        </div>

        <div className='wrapper'>
        <div className="card">
            <div className="cardBody">
                <img src="https://www.mavs.com/wp-content/uploads/2020/04/Mavs-Facebook.jpg" alt=""  className='cardImage'/>
                <h2 className="cardTitle">Project 3</h2>
                <p className="cardDescription">Short description about the project</p>
            </div>
            <button className="cardBtn">Deployed Link</button>
            <button className="cardBtn">GitHub Repository</button>
        </div>
        </div>

        </div>
        </>
    )
}
export default Portfolio