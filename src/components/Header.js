import React, { Component } from "react";
import Typical from "react-typical";

class Header extends Component {
  titles = [];

  constructor() {
    super();
  }

  render() {
    var name = "Hi, I'm Ahmed Bilal 👋"
    var titlesInfo = [ "A Software Engineer", "A Software Developer", "A Collaborator", "A Learner" ];
    this.titles = titlesInfo.map(x => [ x.toUpperCase(), 3000 ] ).flat();
    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="bi:code-slash" data-inline="false"></span>
              <br/>
              <div style={{'margin': '5%'}}>

              </div>
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
