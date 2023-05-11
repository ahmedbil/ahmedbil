import React, { Component } from "react";
import $ from "jquery";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";






import "./App.scss";


class App extends Component {
  constructor(props) {
    super();
    this.state = {data: {}};
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({data : data});
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }
  
  componentDidMount() {
    this.loadResumeFromPath(`data.json`);
  }
  render() {
    return (
      <div>
       <NavBar/>
       <Header/>
       <About/>
       <Projects resumeProjects={this.state.data.projects}/>
       <Experience resumeExperience={this.state.data.experience}/>
       <Contact/>
      </div>
    );
  }
}

export default App;

