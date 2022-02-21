import React, { Component } from "react";
class About extends Component {
  render() {
    // This is a simple class that returns divs/
    return (
      <div>
        <div class="row">
          <div class="col"></div>
          <div class="col align-self-center">
            <h1>About me</h1>
            <h3>Will Sidley-Parker</h3>

          </div>
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col">
            <h3>Back of the Cereal Box Biography</h3>
            <p>Hi I’m Will. I’m a recent college graduate who just broke down and decided to make a personal website. I’m trying to get a job. More importantly though, I’m trying to keep myself driven to complete my own personal projects. I’m interested in a lot of different topics and I hope I can create interesting things for myself and others.</p>
          </div>
          <div class="col">
            <h3>Education</h3>
            <p>I am a graduate of the American University in Washington DC. I somehow managed to gain a double major in Computer Science and History. </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
          <h3>Experience</h3>
    <p>I have worked several jobs over the years. Currently, I am enrolled in the Collabera JUMP pogram.</p>
          </div>
          <div class="col">
          <h3>Goals</h3>
    <p>To do interesting projects and grow. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;