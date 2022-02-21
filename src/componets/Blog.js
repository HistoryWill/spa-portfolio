import React, { Component } from "react";
import customData from 'C:/Users/supac/Desktop/REACTLYSPAPROJECT/spa-portfolio/src/blogs.json';
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            DataisLoaded: false
        };
        const loadData = () => JSON.parse(JSON.stringify(customData));
        this.fetchBlogs = this.fetchBlogs.bind(this);

    }

    fetchBlogs() {
//This method pulls the blog data using a fetch command stores them into a javascript object.
        fetch(
            "../blogs.json"
        ).then((res) => res.json())
            .then((json) => {
                this.setState({

                    blogs: json,
                    DataisLoaded: true,

                });
            });

    }



    render() {
        const { DataisLoaded, blogs, status } = this.state;
        if (!DataisLoaded) {
            this.fetchBlogs()
            // This code block will ensure the that the blog data is already loaded.
        } else {

        }
        return (
            <div>
                <div>{console.log(this.state.blogs)}
                    {/* This button will fetch the current blog json data and print it out in the console to prove the fetch worked correctly */}
                    <button type="button" name="CheckWeather" id="" class="btn btn-primary|dark|link" button onClick={this.fetchBlogs}>Fetch Blogs</button>
                    <div
                        class="col">{this.state.status}</div>
                    {/* This segment would be where the blog object would be iterated through and displayed, along with creating a router object to allow the hashroute to  */}

                </div>

            </div>
        )
    };
}


export default Blog;