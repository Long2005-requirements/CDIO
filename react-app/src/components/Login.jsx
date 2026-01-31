import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState(""); // success | error

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setType("error");
      setMessage("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (email === "admin" && password === "123") {
      setType("success");
      setMessage("Đăng nhập thành công ✅");
    } else {
      setType("error");
      setMessage("Email hoặc mật khẩu không đúng ❌");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email hoặc số điện thoại"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* MESSAGE */}
          {message && (
            <div className={`message ${type}`}>
              {message}
            </div>
          )}

          <button className="btn-login">Đăng nhập</button>

          <a href="#" className="forgot">
            Quên mật khẩu?
          </a>

          <hr />

          <Link to="/resign" className="btn-create">
                Tạo tài khoản mới
          </Link>

        </form>
      </div>
    </div>
  );
}

export default Login;
