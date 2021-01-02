import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Vaishnavi Manjunath</a></h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
              <li><a href="https://www.linkedin.com/in/vaishnavim1913" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/vmanjunath13/myprojects" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.facebook.com/vaishnavi.kanan.3" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/VaishnaviM_1319" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/vaishnavimiyengar/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small><b>Interested in knowing me more </b></small> <br/>
                  <small><b>Feel free to connect with me</b></small> <br />
                  <small><i className="icon-mail" /> vaishnavi.m1913@gmail.com</small> <br />
                  <small><i className="icon-phone"/> Call me at +1 (312) 721-3039</small> <br />
                  <small><i className="icon-location3"/> Address: 2901 S King Dr, Chicago, IL 60616, USA</small>
              </p>
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
              <p><small>Copyright &#169; 2020 Vaishnavi Manjunath</small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
