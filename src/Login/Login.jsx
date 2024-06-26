import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import './Login.css'

function Login({onLoginSuccess}) {

        const handleSuccess = (credentialResponse) => {
          const token = credentialResponse.credential;
          if (token) {
            const decoded = jwtDecode(token);
            onLoginSuccess(decoded);
          }
        };

  return (
    <div>
        <form className="container">
      <h1>Login Here</h1>
      
      <GoogleLogin
        onSuccess={handleSuccess} onError={() => console.log("Login Failed")}
      />
      </form>
    </div>
  );
}

export default Login;