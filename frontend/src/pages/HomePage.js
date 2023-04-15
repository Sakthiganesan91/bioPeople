import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../hooks/authContext";
function HomePage() {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center">
        <h1>Welcome, {user.user.username.toUpperCase()}</h1>
      </div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-between  my-1 w-25">
          <h5>Username</h5>

          <p className="lead">
            <i>{user.user.username}</i>
          </p>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-between w-25">
          <h5>Email</h5>

          <p className="lead">
            <i>{user.user.email}</i>
          </p>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-between w-25">
          <h5>Bio</h5>

          <p className="lead">
            <i>{user.user.bio}</i>
          </p>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <button
          className="btn btn-secondary"
          onClick={() => {
            navigate("/edit");
          }}
        >
          Edit Details
        </button>

        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            navigate("/edit/password");
          }}
        >
          Change Password
        </button>
      </div>
    </>
  );
}

export default HomePage;
