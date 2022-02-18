import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
class Weather extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="row">
                <div class="col">
        <button type="button" name="CheckWeather" id="" class="btn btn-primary|dark|link" button onClick={this.weatherclick}>CheckWeather</button>

            </div>
            
        </div>
         ) };
        
}
  
   
  export default Weather;