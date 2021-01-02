import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p> &emsp; A dedicated, self-starter, team player and multi-tasker pursuing Master's student from Illinois Institute of Technology, Chicago with Computer Science as my major.
                    <br /> &emsp;I am very passionate about programming and engineering as a whole.  I am very fond of complex systems that require critical thinking skills and logic. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Skills</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-6 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Engineering</h3>
                    <p style={{textAlign: 'justify'}}>I have had experience in different languages, frameworks, database systems, etc. In terms of programming languages, I primarily work in Java but have used other languages such as Python, C, JavaScript, etc. I'm dedicated to growing as an engineer and as an individual. I thrive in environments that allow me to develop my skillset on a continuous basis.</p>
                </div>
                </div>
            </div>
            <div className="col-md-6 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Hands on Technologies</h3>
                    <div className="tags">
                        <ul>
                            <li>Java</li>
                            <li>J2EE</li>
                            <li>Python</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JQuery</li>
                            <li>Javascript</li>
                            <li>Ajax</li>
                            <li>Bootstrap</li>
                            <li>ReactJS</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Android</li>
                            <li>Git/BitBucket</li>
                            <li>Linux/Windows/MacOS</li>
                            <li>Machine Learning Techniques/Packages</li>
                            <li>Deep Learning Techniques/Packages</li>
                        </ul>
					</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
