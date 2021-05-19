import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import style6 from './style6.css';
export class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  handleSubmit = (event) => {
    alert("you sucessfully submitted your query");
  };
  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contact">
        <Header/>
        <br/>
        <br/>
        <div className="container-fluid">
          <div className="row  m-4">
            <div className="col-lg-6">
              <div className="m-2">
                <h1 className="">WRITE US</h1>
                <form id="contact-form" onSubmit={this.handleSubmit}>
                  <div className="form-group mt-3">
                    <label>Message</label>
                    <textarea
                      className="form-control mt-1"
                      rows="7"
                      id="message"
                      value={message}
                      onChange={this.onMessageChange}
                      required={"required"}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label className="mb-1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={this.onNameChange}
                      required="required"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      id="email"
                      value={email}
                      onChange={this.onEmailChange}
                      required={"required"}
                    />
                  </div>
                  <div className="mt-2">
                  <Link to="/" className="btn btn-primary">Submit</Link>
                     
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="m-2">
                <h1>REACH US</h1>
                <p className="mt-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi labore praesentium blanditiis saepe recusandae,
                  itaque repellendus? Similique ex mollitia repellat.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <h4>SCHEMAX MVP</h4>
                    <p>
                      3rd Floor <br />
                      1-84-15, DrChalla Chambers, <br />
                      Sector 4, MVP Colony, <br />
                      Visakhapatnam 530017
                      <br />
                      +91-9030069351
                      <br />
                      support@schemaxtech.com
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <h4>SCHEMAX HYDB</h4>
                    <p>
                      3rd Floor, 1-84-15,
                      <br />
                      DrChalla Chambers, <br />
                      Sector 4, <br />
                      Hyderbad 530017
                      <br />
                      +91-9030069351
                      <br />
                      support@schemaxtech.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contactus;