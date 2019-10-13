import React, { Component } from "react";
import { connect } from "react-redux";
import { verifyOtp } from "../actions/userActions";

class VerifyUser extends Component {
  state = {
    userOtp: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.verifyOtp(this.state.userOtp);
  };
  render() {
    return (
      <div className="card shadow p-3 mb-5 mt-5 bg-white rounded">
        <div className="card-body">
          <p className="text-muted">
            For your security, we want to make sure it's really you. We have
            sent an email with a 6 digit verification code to the email address
            you provided. Please enter the code you received below
          </p>
          <form>
            <div className="form-row">
              <div className="form-group col-12 col-md-7">
                <input
                  type="text"
                  id="userOtp"
                  onChange={this.handleChange}
                  placeholder="Enter OTP"
                  className="form-control"
                />
              </div>
              <div className="form-group col-12 col-md-2">
                <button
                  onClick={this.handleSubmit}
                  className="btn btn-info btn-block"
                >
                  Verify
                </button>
              </div>
              <div className="form-group col-12 col-md-3">
                <button className="btn btn-info btn-block">Resend Code</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    verifyOtp: userOtp => dispatch(verifyOtp(userOtp))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(VerifyUser);
