import React from "react";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, user } = useAuth();
  console.log(user.email);
  const formStyle = {
    height: "300px",
  };

  return (
    <div className="container-fluid">
      <form style={formStyle} className="login-form">
        <h1>Please login to place order now!</h1>
        {user.email ? (
          <h3>Welcome {user.displayName}</h3>
        ) : (
          <button className="btn-google-login" onClick={signInUsingGoogle}>
            Google Sign In
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
