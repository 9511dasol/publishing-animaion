import React, { useState } from "react";

function Login() {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [remeber, setRemember] = useState<boolean>();
  const login = () => {
    alert("아직 공사중입니다.");
  };
  const enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      login();
    }
  };
  return (
    <div className="loginbox">
      <h2>login</h2>
      <div className="loginbox__form">
        <div className="loginbox__input">
          <span className="icon">
            <i className="bx bx-envelope bx-sm" />
          </span>

          <input
            id="email"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <label htmlFor="email">email</label>
        </div>
        <div className="loginbox__input">
          <span className="icon">
            <i className="bx bx-lock-alt bx-sm" />
          </span>

          <input
            id="PW"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <label htmlFor="PW">PW</label>
        </div>
      </div>
      <div className="loginbox_rg">
        <label htmlFor="ck">
          <input
            type="checkbox"
            id="ck"
            onChange={(e) => setRemember(e.target.checked)}
          />
          Remember me
        </label>
        <a>Forgot Password</a>
      </div>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
