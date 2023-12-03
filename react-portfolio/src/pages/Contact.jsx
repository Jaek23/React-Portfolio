import '../../style/Contact.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () =>{
    return(
        <>
        <Header/>
        <form>
            <div className='form-section'>
            <h1 className='contact-header'>Contact Me</h1>
            <div className="mb-3">
                <label for="inputName" className="form-label">Name:</label>
                <input type="Name" className="form-control" id="inputName" aria-describedby="nameHelp"/>
            </div>
            <div className="mb-3">
                <label for="inputEmail" className="form-label">Email:</label>
                <input type="email" className="form-control" id="=inputEmail"/>
            </div>
            <div className="mb-3">
                <label for="inputMessage" className="form-label">Message:</label>
                <input type="message" className="form-control" id="inputMessage"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
        <Footer/>
        </>
    )
}
export default Contact