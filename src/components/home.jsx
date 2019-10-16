import React, { Component } from "react";

class Home extends Component {
  state = {
    email: ""
  };

  logOut = e => {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    this.props.history.push("/");
  };

  componentWillMount() {
    if (localStorage.getItem("isLogged") !== true) {
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    if (localStorage.getItem("isLogged") === true) {
      this.setState({
        email: localStorage.getItem("email")
      });
    }
  }
  render() {
    return (
      <div className="card shadow p-3 mb-5 mt-5 bg-white rounded">
        <div className="card-body text-center">
          <h2 className="text-info">
            Hola <strong>{this.state.email}</strong> user!
          </h2>
          <p>You are logged in!</p>
          <button className="btn btn-outline-danger" onClick={this.logOut}>
            Log out
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
