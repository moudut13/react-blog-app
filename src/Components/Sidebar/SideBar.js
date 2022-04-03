import "./SideBar.css"

function SideBar(){
    return(
        <div className="Sidebar">
            <div className="sideBarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1648973982813-20418c592f08image" alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa deserunt distinctio, dolorem earum fuga fugiat iste iure labore nam perferendis perspiciatis, provident quia quos reiciendis rem sit velit, voluptatibus!</p>
            </div>
            <div className="sideBarItem">
                <span className="sidebarTitle">Categories</span>
            </div>
            <div className="sideBarItem">
                <ul className="sideBarList">
                    <li className="sideBarListItem">Life</li>
                    <li className="sideBarListItem">Tech</li>
                    <li className="sideBarListItem">Style</li>
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="SideBarSocial">
                    <i className="sideBarIcon fa-brands fa-facebook"></i>
                    <i className="sideBarIcon fa-brands fa-twitter"></i>
                    <i className="sideBarIcon fa-brands fa-instagram"></i>
                    <i className="sideBarIcon fa-brands fa-pinterest"></i>
                </div>
            </div>
        </div>
    );
}
export default SideBar;