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

class Main extends Component {
    
    weatherclick() {
        
        return Weather;
    }
    render() {
        return (
            <HashRouter>
                <div>

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col">

                                <ul class="navbar-nav">
                                    {/* <ul> */}
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
                                  {/* <button type="button" name="CheckWeather" id="" class="btn btn-primary|dark|link" button onClick={this.weatherclick}>CheckWeather</button> */}
                                    <Weather/>                                 
                                </div>
                                
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="jumbotron">
                                    <div className="content">
                                        <Routes>

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

function fetchweather(props) {
    // const [weather, setWeather] = useState();
    return <div><p>HAHAH</p></div> ;
}
export default Main;