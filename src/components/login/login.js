import React from 'react';
import ReactDOM from 'react-dom';
import MasterPage from "../master/master";

function login()
{
    let registerButton = document.getElementById("register");
    let loginButton = document.getElementById("login");
    let container = document.getElementById("container");
    
    registerButton.addEventListener("click", () => 
    {
      container.classList.add("right-panel-active");
    });
    
    loginButton.addEventListener("click", () => 
    {
      container.classList.remove("right-panel-active");
    });

    loginButton.addEventListener("click", () => 
    {
      ReactDOM.render(<MasterPage />, document.getElementById('root'));
    });
}

export default login;