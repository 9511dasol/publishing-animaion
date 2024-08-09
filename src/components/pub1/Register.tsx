import React, { useState } from "react";

function Register() {
  const [email, SetEmail] = useState<string>("");
  const [name, SetName] = useState<string>("");
  const [pw, SetPw] = useState<string>("");

  return (
    <div className="loginbox">
      <h2>Register</h2>
      <div className="loginbox__form">
        <div className="loginbox__input">
          <span className="icon">
            <i className="bx bx-user bx-sm"></i>
          </span>
          <input
            id="email"
            type="text"
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
          <label htmlFor="email">이름</label>
        </div>

        <div className="loginbox__input">
          <span className="icon">
            <i className="bx bx-lock-alt bx-sm" />
          </span>
          <input
            id="Email"
            type="text"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          <label htmlFor="PW">Email</label>
        </div>

        <div className="loginbox__input">
          <span className="icon">
            <i className="bx bx-lock-alt bx-sm" />
          </span>
          <input
            id="PW"
            type="password"
            value={pw}
            onChange={(e) => SetPw(e.target.value)}
          />
          <label htmlFor="PW">PW</label>
        </div>
      </div>
    </div>
  );
}

export default Register;
