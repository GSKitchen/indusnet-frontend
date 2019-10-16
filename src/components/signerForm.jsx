import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { saveSigner } from "../actions/userActions";

class SignerForm extends Component {
  state = {};
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.saveSigner(this.state, this.props);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
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
            style={{ width: "66.6%" }}
            aria-valuenow="66.6"
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
            <div className="row">
              <div className="col-md-6">
                <Link to="/company-details" className="text-info float-right">
                  Company Details ->
                </Link>
              </div>
              <div className="col-md-6">
                <Link
                  to="/signer-details"
                  className="text-info float-left text-muted"
                >
                  Authorised Signer Details
                </Link>
              </div>
            </div>
            <form>
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
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter Last name..."
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="streetAddress">Street Address</label>
                  <input
                    type="text"
                    id="streetAddress"
                    placeholder="Enter street address..."
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="country">Country</label>
                  <select
                    onChange={this.handleChange}
                    id="country"
                    className="form-control"
                  >
                    <option>--Please Select--</option>
                    <option>India</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="state">State</label>
                  <select
                    onChange={this.handleChange}
                    id="state"
                    className="form-control"
                  >
                    <option>--Please Select--</option>
                    <option>West Bengal</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="city">City</label>
                  <select
                    onChange={this.handleChange}
                    id="city"
                    className="form-control"
                  >
                    <option>--Please Select--</option>
                    <option>Kolkata</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="zip">ZIP</label>
                  <input
                    type="text"
                    id="zip"
                    placeholder="Enter ZIP..."
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="dob">ZIP</label>
                  <input
                    type="date"
                    id="dob"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  onClick={this.handleSubmit}
                  className="btn btn-info mt-4 pl-4 pr-4"
                >
                  NEXT -->
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveSigner: (signer, props) => dispatch(saveSigner(signer, props))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignerForm);
