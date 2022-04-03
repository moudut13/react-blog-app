import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Topbar from "./Topbar/Topbar";
import Home from "./Pages/Home/Home";
import SinglePage from "./Pages/Single/SinglePage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";

function Main() {
    return (
        <>
            <Topbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/single-post/:postId" element={<SinglePage />} />
                <Route path="/write" element={<Write />} />
                <Route path="/settings" element={<Settings />}/>
            </Routes>
        </>
    );
}

export default Main;
