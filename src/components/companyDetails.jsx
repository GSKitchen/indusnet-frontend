import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { saveCompany } from "../actions/userActions";

class CompanyDetails extends Component {
  state = {};
  handleSubmit = e => {
    e.preventDefault();
    this.props.saveCompany(this.state, this.props);
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
                <Link
                  to="/company-details"
                  className="text-info float-right text-muted"
                >
                  Company Details ->
                </Link>
              </div>
              <div className="col-md-6">
                <Link to="/signer-details" className="text-info float-left">
                  Authorised Signer Details
                </Link>
              </div>
            </div>
            <form>
              <div className="form-row">
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
                  <label htmlFor="companyId">Business Tax ID/SSN</label>
                  <input
                    type="text"
                    id="companyId"
                    placeholder="Enter Business Tax ID/SSN..."
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="companyStreet">Street Address</label>
                  <input
                    type="text"
                    id="companyStreet"
                    placeholder="Enter street address..."
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <small id="companyStreet" className="form-text text-muted">
                    Street address should be at least 3 characters long
                  </small>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="companyCountry">Country</label>
                  <select
                    onChange={this.handleChange}
                    id="companyCountry"
                    className="form-control"
                  >
                    <option>--Please Select--</option>
                    <option>India</option>
                  </select>
                  <small id="companyCountry" className="form-text text-muted">
                    Please select Country
                  </small>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="companyState">State</label>
                  <select
                    onChange={this.handleChange}
                    id="companyState"
                    className="form-control"
                  >
                    <option>--Please Select--</option>
                    <option>West Bengal</option>
                  </select>
                  <small id="companyState" className="form-text text-muted">
                    Please select State
                  </small>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="companyCity">City</label>
                  <select
                    onChange={this.handleChange}
                    id="companyCity"
                    className="form-control"
                  >
                    <option>--Please Select--</option>
                    <option>Kolkata</option>
                  </select>
                  <small id="companyCity" className="form-text text-muted">
                    Please select City
                  </small>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="companyZip">ZIP</label>
                  <input
                    type="text"
                    id="companyZip"
                    placeholder="Enter ZIP..."
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <small id="companyZip" className="form-text text-muted">
                    ZIP should be at least 6 characters
                  </small>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="companyPhone">Company Phone</label>
                  <input
                    type="text"
                    id="companyPhone"
                    placeholder="Enter Company Phone..."
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <small id="companyPhone" className="form-text text-muted">
                    Company Phone should be at least 3 characters long
                  </small>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="companyWeb">Company Website</label>
                  <input
                    type="text"
                    id="companyWeb"
                    placeholder="Enter Company Website..."
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <small id="companyWeb" className="form-text text-muted">
                    Company Website should be at least 3 characters long
                  </small>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="companyInco">Date of Incorporation</label>
                  <input
                    type="date"
                    id="companyInco"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <small id="companyInco" className="form-text text-muted">
                    Date of Incorporation should be at least 3 characters long
                  </small>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="companyIncoState">
                    State of Incorporation
                  </label>
                  <select
                    onChange={this.handleChange}
                    id="companyIncoState"
                    className="form-control"
                  >
                    <option>--Please Select--</option>
                    <option>Maharashtra</option>
                  </select>
                  <small id="companyIncoState" className="form-text text-muted">
                    Please select State
                  </small>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="companyIncoCity">City of Incorporation</label>
                  <select
                    onChange={this.handleChange}
                    id="companyIncoCity"
                    className="form-control"
                  >
                    <option>--Please Select--</option>
                    <option>Mumbai</option>
                  </select>
                  <small id="companyIncoCity" className="form-text text-muted">
                    Please select City
                  </small>
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
    saveCompany: (company, props) => dispatch(saveCompany(company, props))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyDetails);
