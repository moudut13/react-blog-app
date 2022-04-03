import "./Write.css"

function Write(){
    return(
        <div className="Write">
            <img className="writeImg" src="https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1648982530605-2028ae0c9f7aimage" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="inputFile">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="inputFile" style={{display:"none"}}/>
                    <input className="writeInput" type="text" placeholder="text" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput writeInputTextArea" type="text" placeholder="Tell your story...."></textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    );
}
export default Write;