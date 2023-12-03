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
                <h2 className="card-title">About Me</h2>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A est nam autem deserunt culpa ullam harum labore cum libero, id, vitae ab. Maxime nisi dolor praesentium voluptates, soluta mollitia accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci explicabo tempore, et exercitationem natus dolorem aspernatur, sed tenetur debitis voluptatem deleniti dolores veritatis nesciunt vitae asperiores quaerat ratione nemo.</p>
            </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
export default About

 