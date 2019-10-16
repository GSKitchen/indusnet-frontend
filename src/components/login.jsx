import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://indusnet.ap-south-1.elasticbeanstalk.com/login", this.state)
      .then(res => {
        console.log(res);
        if (res.status === 200 && res.data) {
          if (res.data.isVerified === 1) {
            localStorage.setItem("isLogged", true);
            localStorage.setItem("userId", res.data.id);
            localStorage.setItem("userEmail", res.data.email);
            this.props.history.push("/home");
          }
        } else {
          alert("Invalid Username or Password");
        }
      });
  };
  render() {
    return (
      <div className="card shadow p-3 mb-5 mt-5 bg-white rounded">
        <div className="card-body text-center">
          <h3 className="text-info">Login to do more</h3>
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="email"
              required
              autoFocus
              className="form-control"
              placeholder="Username"
              onChange={this.handleChange}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="form-control"
              onChange={this.handleChange}
              required
            />
            <button className="btn btn-info btn-block mt-4">Log in</button>
            <p>
              <small>
                <a href="/reset-password">Forget password</a>
              </small>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
