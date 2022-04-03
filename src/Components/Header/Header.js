import "./Header.css"

function Header(){
    return(
        <div className="Header">
            <div className="HeaderTitle">
                <div className="HeaderTitlesm">React & Node</div>
                <div className="HeaderTitlelg">Blog</div>
            </div>
            <div className="">
                <img className="HeaderImg" src="https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1648971803793-2e9a11298aacimage" alt=""/></div>
        </div>
    );
}
export default Header;