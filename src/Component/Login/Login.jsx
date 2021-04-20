import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core"

function Login() {
    const signIn = () => {

    }
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" />
        <Button variant='outline' onClick={signIn}>Sign in</Button>
      </div>
    </div>
  );
}

export default Login;
