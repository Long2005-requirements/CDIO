import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Resign.css";

function Resign() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (
      !form.firstName ||
      !form.lastName ||
      !form.day ||
      !form.month ||
      !form.year ||
      !form.email ||
      !form.password
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");

    console.log("REGISTER DATA:", form);

    alert("Register successful");

    // chuyển về login
    navigate("/");
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Create a new account</h2>
        <p className="subtitle">It's quick and easy.</p>

        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="name-group">
            <input
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
            />
            <input
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          {/* Birthday */}
          <label className="label">Date of birth</label>
          <div className="birthday-row">
            <select name="day" value={form.day} onChange={handleChange}>
              <option value="">Day</option>
              {[...Array(31)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>

            <select name="month" value={form.month} onChange={handleChange}>
              <option value="">Month</option>
              {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
                .map(m => <option key={m} value={m}>{m}</option>)}
            </select>

            <select name="year" value={form.year} onChange={handleChange}>
              <option value="">Year</option>
              {[...Array(60)].map((_, i) => (
                <option key={i} value={2025 - i}>{2025 - i}</option>
              ))}
            </select>
          </div>

          <input
            name="email"
            placeholder="Mobile number or email address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="New password"
            value={form.password}
            onChange={handleChange}
          />

          <p className="policy">
            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.
          </p>

          <button className="btn-signup">Sign up</button>

          <Link to="/" className="login-link">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Resign;
