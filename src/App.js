import React, { Component } from "react";
import { connect } from "react-redux";

//import UserForm from "./components/userForm";
//import VerifyUser from "./components/verifyUser";
import CompanyDetails from "./components/companyDetails";

class App extends Component {
  state = {};
  render() {
    //console.log(this.props);
    //const { user } = this.props;
    //console.log(user.firstName);
    return (
      <div className="App container">
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
        <CompanyDetails />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  return {
    user: state.user.userInfo
  };
};

export default connect(mapStateToProps)(App);
