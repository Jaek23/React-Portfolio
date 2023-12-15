import '../../style/About.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () =>{
    return(
        <div className='about-background'>
        <Header/>
        <div className="about-container">
        <div className="card-section">
            <div className="card-body">
                <h1 className="card-title">About Me</h1>
                <p className="card-text">Aspiring software engineer with a background in marketing and sales. I completed the Full Stack Web Development Bootcamp at the University of Texas at Austin in 2023. I enjoy problem solving and creating user-friendly and visually appealing applications. I am continuously learning new skills to advance my full-stack developing skills. My skills include HTML, CSS, JavaScript, React, Express, Node, and Git.</p>
                <a 
                href="https://docs.google.com/document/d/13SJRFSt4HOCTzRtZ-Q4Gg6UaP1j1dmzT/edit"
                className='resume-btn'
                target='null'
                >
                View CV
                </a>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}
export default About

 