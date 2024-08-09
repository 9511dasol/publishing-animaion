import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import "./Pub1.css";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
export default function Pub1() {
  const [state, setState] = useState<string>("Login");
  const [bool, SetBool] = useState<boolean>(true);

  const [login, SetLogin] = useState<boolean>(true);
  return (
    <div>
      <Header onclick={()=>SetLogin(true)}/>
      {login ? (
        <div className="background">
          <div className="wrapper">
            <span onClick={() => SetLogin(false)} className="icon-close">
              <i className="bx bx-x"></i>
            </span>
            {bool ? <Login /> : <Register />}
            <div className="loginbox__regs">
              {bool ? (
                <>
                  <span>Don't you have an account ?</span>
                  <p>
                    <a onClick={() => SetBool(!bool)}>Register</a>
                  </p>
                </>
              ) : (
                <>
                  <span>Do you have an account ?</span>
                  <p>
                    <a onClick={() => SetBool(!bool)}>Login</a>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

{
  /* <i className='bx bx-envelope'></i>
      <i className='bx bx-lock-alt' ></i> */
}
