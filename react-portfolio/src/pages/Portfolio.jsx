import '../../style/Portfolio.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Portfolio = () =>{
    return(
        <div className='port-component'>
        <Header/>
        <div className='container'>
        <div className='wrapper'>
        <div className="card">
            <div className="cardBody">
                <img src="https://www.mavs.com/wp-content/uploads/2020/04/Mavs-Facebook.jpg" alt="Dallas mavericks logo"  className='cardImage'/>
                <h2 className="cardTitle">DallasMavericks</h2>
                <p className="cardDescription">Dallas Maverick's player statistics throughout their career.</p>
                <div className='portfolioBtn'>                
                <a href="https://devonmcfarlen.github.io/DallasMavericksPlayerStats/" className='cardBtn' target='null'>Deployed Link</a>
                <a href="https://github.com/DevonMcfarlen/DallasMavericksPlayerStats" className='cardBtn' target='null'>GitHub Repository</a>
                </div>
            </div>
        </div>
        </div>

        <div className='wrapper'>
        <div className="card">
            <div className="cardBody">
                <img src='https://media.istockphoto.com/id/459358241/vector/bodybuilding-icon.jpg?s=612x612&w=0&k=20&c=SFoZBobKrtonqGRqiuJMCxVnCkMarMNQPdGMWS0CuuY=' alt="workout picture"  className='cardImage'/>
                <h2 className="cardTitle">MyWorkout</h2>
                <p className="cardDescription">A workout application to store and track favorite workouts.</p>
                <div className='portfolioBtn'>                
                <a href="https://my-workouts-c1e5314d5b06.herokuapp.com/login" className='cardBtn' target='null'>Deployed Link</a>
                <a href="https://github.com/lindseycarlson23/my-workouts" className='cardBtn' target='null'>GitHub Repository</a>
                </div>
            </div>
        </div>
        </div>

        <div className='wrapper'>
        <div className="card">
            <div className="cardBody">
                <img src="https://www.mavs.com/wp-content/uploads/2020/04/Mavs-Facebook.jpg" alt=""  className='cardImage'/>
                <h2 className="cardTitle">Project 3</h2>
                <p className="cardDescription">To be determined... this project is still in process.</p>
                <div className='portfolioBtn'>                
                <a href="" className='cardBtn' target='null'>Deployed Link</a>
                <a href="" className='cardBtn' target='null'>GitHub Repository</a>
                </div>
            </div>
        </div>
        </div>

        </div>
        <Footer/>
        </div>
    )
}
export default Portfolio
