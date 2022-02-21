import React, { Component } from "react";
//import React, { Component } from "react";
import {
    Route,
    NavLink,
    Routes,
    useState,
    HashRouter
} from "react-router-dom";
import Home from "./componets/Home";
import Blog from "./componets/Blog";
import About from "./componets/About";
import Weather from "./componets/Weather"

import 'bootstrap/dist/css/bootstrap.css';
//import background from "/public/toothpaste.gif";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    weatherstate = { message: "" }
    weatherCallback = (childData) => {
        // this is the callback function to check the temperature state to see if its relevant to render bugs bunny creating an ice wall 
        this.setState({ message: childData })
        console.log(this.state.message);

    }

    render() {
        const { message } = this.state;
        if (this.state.message === "Will is being turned into a popsicle") {
            //this simple equals state check' checks the temperature
            console.log("Should work2");
            var img = document.createElement("img");
            img.src = "./toothpaste.gif";
            var block = document.getElementById("central1");
            block.appendChild(img);
            //This will append the bugs bunny gif to the central1 div.
            block.setAttribute("style", "background-image")
            block.setAttribute("style", "background-size: 100% 100%;")


        }
        return (

            <HashRouter>
                <div id="central1">

                    <div id="central" class="container-fluid">

                        <div class="row">
                            <div class="col">



                                <ul class="navbar-nav">
                                    {/* This is the navbar html element that interacts with the react server. */}
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/Blog">Blog</NavLink></li>
                                    <li><NavLink to="/About">About</NavLink></li>

                                </ul>

                            </div>
                            <div class="col">
                                <h3 class="text-right">
                                    Welcome!
                                </h3>
                            </div>
                            <div class="col">
                                <div class="d-grid gap-2">
                                    {/* This calls the weatherCallback function upon rendering of the weather element. */}
                                    <Weather weatherCallback={this.weatherCallback} />

                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="jumbotron">
                                    <div className="content">
                                        <Routes>
                                            {/* This part actually routes the react server routes to appened the url. */}
                                            <Route path="/" element={<Home />} exact />
                                            <Route path="/blog" element={<Blog />} exact />
                                            <Route path="/About" element={<About />} exact />
                                        </Routes>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }



}


export default Main;