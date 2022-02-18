import React, { Component } from "react";
//import React, { Component } from "react";
import {
  Route,
  NavLink,
  Routes,
  HashRouter
} from "react-router-dom";
import Home from "./componets/Home";
import Blog from "./componets/Blog";
import About from "./componets/About";
class Main extends Component {
    render() {
      return (
        <HashRouter>
        <div>
        
            <ul>
               <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Blog">Blog</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>

            </ul>
            <div className="content">
            <Routes>

              <Route path="/" element={<Home/>} exact/>
              <Route path="/blog" element={<Blog/>} exact/>
              <Route path="/About" element={<About/>} exact/>
              </Routes>
            </div>
           
    </div>
    </HashRouter>
      );
    }
  }
   
  export default Main;