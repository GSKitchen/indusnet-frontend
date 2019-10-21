import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions/userActions";
import {
  validateInputField,
  validateConfirmPassword,
  validateEmail
} from "../actions/formValidation";
//import axios from "axios";

class UserForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    password: "",
    conPassword: "",
    isLoading: false,
    isValidForm: false
  };

  // validateElement = event => {
  //   if (event.target.min > event.target.value.length) {

  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  //handle change
  handleChange = e => {
    validateInputField(e.target);

    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleConPassword = e => {
    let res = validateConfirmPassword(e.target, this.state.password);

    this.setState({
      ...this.state,
      isValidForm: res,
      [e.target.id]: e.target.value
    });
  };

  handleEmail = e => {
    validateEmail(e.target);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  //save form data
  handleSave = e => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });

    //console.log(this.state);
    //e.target.className += " was-validated";
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
            <form onSubmit={this.handleSave} autoComplete="false">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter first name..."
                    className="form-control"
                    onChange={this.handleChange}
                    required
                    min="3"
                  />
                  <small id="firstName" className="d-none">
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
                    required
                    min="3"
                  />
                  <small id="lastName" className="d-none">
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
                    required
                    onChange={this.handleEmail}
                  />
                  <small id="email" className="d-none">
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
                    required
                    min="5"
                  />
                  <small id="companyName" className="d-none">
                    Company Name should be at least 5 characters long
                  </small>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    className="form-control"
                    required
                    onChange={this.handleChange}
                    min="6"
                  />
                  <small id="password" className="d-none">
                    Password should be at least 6 characters long
                  </small>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="conPassword">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="form-control"
                    id="conPassword"
                    onChange={this.handleConPassword}
                    required
                  />
                  <small id="conPassword" className="d-none">
                    Password does not matching!
                  </small>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-info pl-4 pr-4"
                  disabled={this.state.isValidForm}
                >
                  {this.state.isLoading === false ? (
                    <span>
                      NEXT <i className="material-icons">arrow_right_alt</i>
                    </span>
                  ) : (
                    <i>
                      <span
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Please wait
                    </i>
                  )}
                </button>
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
