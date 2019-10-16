import React, { Component } from "react";

class SignerForm extends Component {
  state = {};
  handleSubmit = e => {
    e.preventDefault();
    //
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <div className="card shadow p-3 mb-5 mt-5 bg-white rounded">
        <div className="card-body">
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
                <select id="country" className="form-control">
                  <option>--Please Select--</option>
                  <option id="11">India</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="state">State</label>
                <select id="state" className="form-control">
                  <option>--Please Select--</option>
                  <option id="111">West Bengal</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="city">City</label>
                <select id="city" className="form-control">
                  <option>--Please Select--</option>
                  <option id="1111">Kolkata</option>
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
    );
  }
}

export default SignerForm;
