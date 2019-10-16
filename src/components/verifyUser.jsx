import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { verifyOtp } from "../actions/userActions";

class VerifyUser extends Component {
  state = {
    userOtp: "",
    email: this.props.user.email
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  resendOtp = e => {
    e.preventDefault();
    axios
      .get(
        "http://indusnet.ap-south-1.elasticbeanstalk.com/resend-code/" +
          this.state.email
      )
      .then(res => {
        console.log(res);
        alert("OTP Sent successfully");
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    //this.state.email = this.props.user.email;
    //console.log(this.state);
    //let userResponse = this.state.userOtp + "," + this.props.user.email;
    this.props.verifyOtp(this.state, this.props);
  };
  render() {
    // setTimeout(() => {
    //   this.props.history.push("company-details");
    // }, 2000);
    // const { user } = this.props;
    // console.log(user.email); //working
    console.log(this.props.user.email);
    //console.log(this.props.user.userInfo.email);
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
                <button
                  className="btn btn-info btn-block"
                  onClick={this.resendOtp}
                >
                  Resend Code
                </button>
              </div>
            </div>
          </form>
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
    verifyOtp: (userOtp, props) => dispatch(verifyOtp(userOtp, props))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyUser);
