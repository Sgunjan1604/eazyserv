import React, { useState } from "react";
import "./css/Signup.css"; // same theme as signup
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "../redux/slices/authSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Login failed");
      }

      localStorage.setItem("token", data.authtoken);

      const user = dispatch(fetchUser())

      if (user.role === "worker") navigate("/worker/dashboard");
      else if (user.role === "customer") navigate("/customer/dashboard");
      else navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signupContainer">
      <form className="signupCard" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p>Login to continue using HomeHelp</p>

        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <span className="loginLink">
          Don’t have an account? <a href="/signup">Create one</a>
        </span>
      </form>
    </div>
  );
};

export default Login;
