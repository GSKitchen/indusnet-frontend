import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions/userActions";
//import axios from "axios";

class UserForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    password: "",
    conPassword: ""
  };

  //handle change
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  //save form data
  handleSave = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createUser(this.state, this.props);
  };
  render() {
    return (
      <div>
        <h2 className="text-info text-center mt-4">
          Get Started with Registration
        </h2>
        <div className="progress mt-4" style={{ height: "7px" }}>
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: "33.3%" }}
            aria-valuenow="33.3"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <span className="text-muted">Your details</span>
          </div>
          <div className="col-md-4 text-center">
            <span className="text-muted">Verify</span>
          </div>
          <div className="col-md-4 text-center">
            <span className="text-muted">Company Details</span>
          </div>
        </div>
        <div className="card shadow p-3 mb-5 mt-5 bg-white rounded">
          <div className="card-body">
            <form onSubmit={this.handleSave}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter first name..."
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <small id="firstName" className="form-text text-muted">
                    First Name should be at least 3 characters long
                  </small>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter last name..."
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <small id="lastName" className="form-text text-muted">
                    Last Name should be at least 3 characters long
                  </small>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Company Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email id"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <small id="email" className="form-text text-muted">
                    Please enter a valid email
                  </small>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Enter Company name..."
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <small id="companyName" className="form-text text-muted">
                    Company Name should be at least 3 characters long
                  </small>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <small id="password" className="form-text text-muted">
                    Password should be at least 6 characters long
                  </small>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="conPassword">Confirm Name</label>
                  <input
                    type="text"
                    id="conPassword"
                    placeholder="Enter first name..."
                    className="form-control is-invalid"
                    onChange={this.handleChange}
                  />
                  <small id="conPassword" className="form-text text-muted">
                    Password doesn't match
                  </small>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-info pl-4 pr-4">NEXT --></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (user, props) => dispatch(createUser(user, props))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UserForm);
