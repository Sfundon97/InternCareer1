
import React from 'react'
import Home from "./pages/home/home";
import TopBar from "./components/topbar/topbar";
import Single from "./pages/single_post/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/SignUp";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from './components/about/About';
import Posts from './components/Posts/Posts';
import Post from './components/post/Post';


function App(){
  return(
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path="/home" element={<Home/>}
        />
        <Route path= "/about" element={<About/>}
        />
        <Route path="/single/:id" element={<Posts/>}
        />
        <Route path="/blog" element={<Write/>}
        />
        <Route path="/profile" element={<Settings/>}
        />
        <Route path="/login" element={<Login/>}
        />
        <Route path="/register" element={<Register/>}
        />
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;
