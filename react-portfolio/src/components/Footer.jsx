import '../../style/Footer.css'

function Footer (){
    return(
        <footer>
            <section className='footer-btn'>
                <div className='footer-link'>
                <button><a href="#">GitHub</a></button>
                </div>
                <div className='footer-link'>
                <button><a href="#">LinkedLn</a></button>
                </div>
                <div className='footer-link'>
                <button><a href="#">Email</a></button>
                </div>
            </section>
        </footer>
    )
}
export default Footer