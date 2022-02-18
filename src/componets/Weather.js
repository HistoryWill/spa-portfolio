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
        //this.setState({value :'a'});
        //console.log(this.state.value);
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
        console.log(this.state.items['main']["feels_like"]);
        var conver = this.state.items['main']["feels_like"];

        if(conver < 273.15){
            console.log("Will is Freezing");
            this.setState({status: "Will is being turned into a popsicle"});
        }else{
            this.setState({status: "Will is A-okay!"});
        }
        console.log(this.state.status)
       // this.fetchWeather()
//var things = this.state.items.map();
//console.log(things);
    }
    
    render(){
        const {DataisLoaded, items, status} = this.state;
        if(!DataisLoaded){
            this.fetchWeather()
        }
        //this.fetchWeather()
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