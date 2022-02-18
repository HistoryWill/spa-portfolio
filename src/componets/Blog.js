import React, { Component } from "react";
import customData from 'C:/Users/supac/Desktop/REACTLYSPAPROJECT/spa-portfolio/src/blogs.json';
class Blog extends Component {
    constructor(props){
        super(props);
        this.state ={
            blogs: [],
            DataisLoaded : false
        };
        const loadData = () => JSON.parse(JSON.stringify(customData));
        this.fetchBlogs = this.fetchBlogs.bind(this);
        //this.checkTemp = this.checkTemp.bind(this); 
    }
    
    fetchBlogs(){
      
        fetch(
            "../blogs.json"
        ).then((res) => res.json())
        .then((json) => {
            this.setState({
                
                blogs: json,
                DataisLoaded: true,
               
            });
        });
     //   console.log(this.state.blogs)
       
}



    render() {
        const {DataisLoaded, items, status} = this.state;
        if(!DataisLoaded){
            this.fetchBlogs()
        }else{
          //  console.log(this.state.blogs)
            
        }
        //this.fetchWeather()
        return(
            <div>
            <div>{console.log(this.state.blogs)}
            
            <button type="button" name="CheckWeather" id="" class="btn btn-primary|dark|link" button onClick={this.fetchBlogs}>CheckWeather</button>
                <div
                class="col">{this.state.status}</div>
            
            </div>
          
            </div>
         ) };
    }
  
   
  export default Blog;