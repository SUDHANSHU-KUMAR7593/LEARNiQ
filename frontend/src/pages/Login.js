import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/Login.css";
import { motion } from "framer-motion";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
      console.log(backendUrl);

      const response = await fetch(`${backendUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json();
      if (json.success && json.authtoken) {
        localStorage.setItem("token", json.authtoken);
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="row">
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="images/education-transparent-background-21.png"
            className="img-fluid"
            alt="Education"
            height="450px"
            width="450px"
          />
        </motion.div>

        <div className="col-md-6">
          <div className="c1">
            <h1 className="mb-4">Login</h1>
            <p className="mb-4">Log in to continue</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="name@example.com"
                  value={credentials.email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <a href="/forgot-password" className="float-end text-decoration-none">
                  Lost password?
                </a>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={onChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-success w-100"
                disabled={!credentials.email || !credentials.password}
              >
                Sign in
              </button>
            </form>

            <p className="mt-3">
              Not registered? <Link to="/Register">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
