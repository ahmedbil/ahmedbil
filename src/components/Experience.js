import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    var sectionName = "Experience";
    if (this.props.resumeExperience) {
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;
        const descriptions = work.description;

        if (mainTechnologies) {
          var mainTech = mainTechnologies.map((technology, i) => {
            return (
              (technology.mainTech.url !== "") ?
              <a href={technology.mainTech.url} target="_blank" rel="noopener noreferrer">
                <Badge pill className="main-badge mr-2 mb-2 effect" key={i}>
                {technology.mainTech.name}
                </Badge>
              </a> : 
              <Badge pill className="main-badge mr-2 mb-2" key={i}>
                {technology.mainTech.name}
              </Badge>
            );
          });
        }
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var description =  descriptions.map((descrip, i) => {
          return (<li style={{marginTop: "5px"}}>
                  <h7
                    className="vertical-timeline-element-subtitle"
                    style={{ textAlign: "left"}}
                  >
                    {descrip}
                  </h7>
            </li>);

        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#68A0AA",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="experience-icon"></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h4>
            <br/>
            <ul>{description}</ul>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline lineColor="black">
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#000",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
