import "./Settings.css"
import SideBar from "../../Sidebar/SideBar";

function Settings(){
    return(
        <div className="Setting">
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingTitleUpdate">Update Your Account</span>
                    <span className="settingTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1648982530605-2028ae0c9f7aimage" alt=""/>
                        <label htmlFor="formInputImg"><i className="settingsPPIcon fa-solid fa-user-large"></i></label>
                        <input id="formInputImg" type="file" style={{display: "none"}}/>
                    </div>
                        <div className="settingsFormGroup">
                            <label>Username</label>
                            <input type="text" placeholder="Shuvo" autoFocus={true}/>
                        </div>
                        <div className="settingsFormGroup">
                            <label>Email</label>
                            <input type="text" placeholder="moudutshuvo40@gmail.com" autoFocus={true}/>
                        </div>
                        <div className="settingsFormGroup">
                            <label>Paasword</label>
                            <input type="password" placeholder="Enter You Password"/>
                        </div>
                    <button className="settingsUpdate">Update</button>
                </form>
            </div>
            <SideBar/>
        </div>
    );
}
export default Settings;