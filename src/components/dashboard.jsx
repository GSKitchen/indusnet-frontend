import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="card shadow p-3 mb-5 mt-5 bg-white rounded">
        <div className="card-body">
          <h1 className="text-info text-center">Congratulations!</h1>
          <p className="lead text-center text-muted">
            You have successfully registered.
          </p>
          <div className="text-center">
            <Link to="/login" className="btn btn-outline-info">
              Log in
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
