import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

//Importing my components
import UserForm from "./components/userForm";
import VerifyUser from "./components/verifyUser";
import CompanyDetails from "./components/companyDetails";
import SignerForm from "./components/signerForm";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Home from "./components/home";

class App extends Component {
  //initiate state
  state = {};
  render() {
    //console.log(this.props);
    //const { user } = this.props;
    //console.log(user.firstName);
    return (
      //applying router to navigate component
      <BrowserRouter>
        <div className="App container">
          <Route exact path="/" component={UserForm} />
          <Route path="/verify" component={VerifyUser} />
          <Route path="/company-details" component={CompanyDetails} />
          <Route path="/signer-details" component={SignerForm} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </div>
      </BrowserRouter>
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
