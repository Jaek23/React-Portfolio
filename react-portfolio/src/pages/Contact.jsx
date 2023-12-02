const Contact = () =>{
    return(
        <form>
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
        </form>
    )
}
export default Contact