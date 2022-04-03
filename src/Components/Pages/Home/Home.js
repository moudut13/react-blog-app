import "./Home.css"
import Header from "../../Header/Header";
import Posts from "../../Posts/Posts";
import SideBar from "../../Sidebar/SideBar";

function Home(){
    return(
        <>
            <Header />
            <div className="Home">
                <Posts/>
                <SideBar/>
            </div>
        </>

    );
}
export default Home;