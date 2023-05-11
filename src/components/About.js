import React, { Component } from "react";



class About extends Component {
  render() {
    var profilepic = "assets/profile.jpg";
    var sectionName = "About Me";
    var hello = "Re: Can you introduce yourself? 😄";
    var about = "Hi there! 👋 My name is Ahmed Bilal 👀, and I am a software developer who is enthusiastic about using technology for social good. ✨ Currently, I am a computer science student studying at the University of Waterloo. 🏫 I am driven by curiosity and have a passion for learning.💡 Through my previous internships,💼 I have had the opportunity to work with various technologies, ranging from computer vision to communication protocols and developing microservices.🤖 This experience has given me professional exposure to frameworks and libraries such as Ruby on Rails, Socket.io, Angular, Vue, React, Flask, Express, NumPy, OpenCV, JavaFX, Android, PyTorch, and TensorFlow. 🌱 Most recently, I worked at Christie Digital Systems on their Mystique software, 👨‍💻 where I developed a single-shot test pattern used for projector calibration. I am interested in full-stack development, embedded software, and fintech, and I am always looking to collaborate on projects related to these technologies. 🤝 Please feel free to reach out if you are looking for a collaborator on projects related to any of these technologies! 📫";
    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
              <div class="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="100%"
                    width="100%"
                    src={profilepic}
                    alt="Ahmed Bilal"
                  />
                </span>
              </div>
            </div>
            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                      background: "#E4E1D0",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
