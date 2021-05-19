import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./style5.css";

class Login extends React.Component {
  render() {
    return (
      <div>

 <Header/>


       
          <br/>
          <br /> <br /> <br /> <br />
      <div class="align">

<div class="grid">

  <form action="https://httpbin.org/post" method="POST" class="form login">

    <div class="form__field">
      <label for="login__username"><svg class="icon">
          
        </svg><span class="hidden">Username</span></label>
      <input autocomplete="username" id="login__username" type="text" name="username" class="form__input" placeholder="Username" required/>
    </div>

    <div class="form__field">
      <label for="login__password"><svg class="icon">
          
        </svg><span class="hidden">Password</span></label>
      <input id="login__password" type="password" name="password" class="form__input" placeholder="Password" required/>
    </div>

    <div class="form__field">
      <input type="submit" value="Sign In"/>
    </div>

  </form>

  <p class="text--center ch">Not a member? <a class="check" href="#">Sign up now</a> <svg class="icon">
     
    </svg></p>

</div>


<ul class="navbar-nav flex-row">
        <li class="nav-item">
          <a class="nav-link pe-3" href="#!">
            <i class="fab fa-youtube" style={{fontSize: "2.3em"}}></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3" href="#!">
            <i class="fab fa-facebook-f" style={{fontSize: "2.3em"}}></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ps-4" href="#!">
            <i class="fab fa-instagram"  style={{fontSize: "2.3em"}}></i>
          </a>
        </li>
      </ul>
</div>
<br/>
<br/>
<Footer/>
      </div>
    );
  }
}

export default Login;