import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
class Weather extends Component {
    constructor(props){
        super(props);
        this.state ={
            items: [],
            DataisLoaded : false
        };

        this.fetchWeather = this.fetchWeather.bind(this);
        this.checkTemp = this.checkTemp.bind(this);
    }
    fetchWeather(){
    //   This pulls data from the api 
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?id=5037649&appid=20cb7c3f70bc171cda7bac3503a38ff1"
).then((res) =>  res.json())
        .then((json) => {
            this.setState({
                
                items: json,
                DataisLoaded: true,
                status: ""
            });
        }).then(this.state.items)
       
}

    checkTemp(){
        //This method will get the temperature and determine if it is below freezing or not in minneapolis. If it is it will then fire a call back function to the main method v 
        this.props.weatherCallback(this.state.status);
        console.log(this.state.items['main']["feels_like"]);
        var conver = this.state.items['main']["feels_like"];

        if(conver < 273.15){
            console.log("Will is Freezing");
            this.setState({status: "Will is being turned into a popsicle"});
        }else{
            this.setState({status: "Will is A-okay!"});
        }
        console.log(this.state.status)
        this.props.weatherCallback(this.state.status);
        // This is the CallBack sfunction

    }
    
    render(){
        const {DataisLoaded, items, status} = this.state;
        if(!DataisLoaded){
            this.fetchWeather()
            // This calls the fetch Weather function
        }
        return(
            <div class="row">
                <div class="col">
        <button type="button" name="CheckWeather" id="" class="btn btn-primary|dark|link" button onClick={this.checkTemp}>CheckWeather</button>
                <div
                class="col">{this.state.status}</div>
            </div>
            
        </div>
         ) };
        
}
  
   
  export default Weather;