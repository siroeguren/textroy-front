import { useEffect } from 'react';
import './loginApp.css';
import login from "./login.js";
const App = (props) => 
{
  useEffect(()=>
  {
    login();
  },[]);

    return (
      <>
      <div class='container' id='container'>
      <div class="form-container register-container"> 
        <form action="http://127.0.0.1:8000/api/register" method='POST'>    
          <h1>Register here.</h1>
          <input type="text" placeholder="name" name='name'></input>
          <input type="email" placeholder="email" name='email'></input> 
          <input type="password" placeholder="password" name='password'></input>
          <button>Register</button>     
          <span>or use your account</span>  
        </form>  
      </div>   
      <div class="form-container login-container"> 
        <form action="http://127.0.0.1:8000/api/auth/login" method='POST'> 
          <h1>Login hire.</h1>    
          <input type="email" placeholder="Email" name='email'></input>
          <input type="password" placeholder="Password" name='password'></input>    
          <div class="content">   
            <div class="checkbox">  
                <input type="checkbox" name="checkbox" id="checkbox"></input> 
                <label>Remember me</label>    
            </div>    
            <div class="pass-link">   
        
            </div>  
          </div> 
          <button>Login</button>
        </form>  
      </div>    
      <div class="overlay-container">    
        <div class="overlay">      
          <div class="overlay-panel overlay-left">      
              <h1 class="title">Hello friends</h1> 
              <p>if Yout have an account, login here and have fun</p>    
              <button class="ghost" id="login">Login<i class="lni lni-arrow-left login"></i></button>      
          </div>       
          <div class="overlay-panel overlay-right"> 
              <h1 class="title">Start yout journy now</h1>  
              <p>if you don't have an account yet, join us and start your journey.</p>       
              <button class="ghost" id="register">Register<i class="lni lni-arrow-right register"></i></button>        
          </div>  
        </div>  
      </div> 
    </div>
      <script src="login.js"></script>
      </>
    );
}
export default App;


