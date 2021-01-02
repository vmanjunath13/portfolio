import React, { Component } from 'react'

export default class Contact extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     email: '',
  //     message: ''
  //   }
  // }

  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="contact">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Interested to know more</span>
                <h2 className="colorlib-heading animate-box">Contact Me</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                <div className="timeline-label">
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-7">
                    <i className="icon-pen2" />
                  </div>
                  <div className="timeline-label">
                    <p>Vaishnavi Manjunath</p>
                    <p>Chicago, IL, US 60616</p>
                    <p>+1 (312) 721-3039</p>  
                  </div>
                  </div>
                </div>
                {/* <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form> */}
                </article>
              </div>
            </div>
          </div></div>
        </section>
      </div>
    )
  }

  // onNameChange(event) {
  //   this.setState({name: event.target.value})
  // }

  // onEmailChange(event) {
  //   this.setState({email: event.target.value})
  // }

  // onMessageChange(event) {
  //   this.setState({message: event.target.value})
  // }

  // handleSubmit(event) {
  // }
}
