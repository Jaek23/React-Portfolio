import '../../style/Resume.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Resume = () =>{
    return (
        <>
        <Header/>
        <div className='resume-component'>
        <a href="https://docs.google.com/document/d/13SJRFSt4HOCTzRtZ-Q4Gg6UaP1j1dmzT/edit" className="resume-btn" target="null">View CV</a>
        </div>
        <Footer/>
        </>
    )
}
export default Resume