import "./SinglePage.css"
import SideBar from "../../Sidebar/SideBar";
import SinglePost from "../../SinglePost/SinglePost";

function SinglePage(){
    return(
        <div className="singlePage">
            <SinglePost/>
            <SideBar/>
        </div>
    );
}
export default SinglePage;