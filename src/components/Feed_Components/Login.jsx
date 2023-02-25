import React from "react";
import "./Feed_Component_Css/Login.css";



const Login = () =>{
    return(
        
        <div className="loginbody">
        
        <div className="container">
            
        <div className="card">
            <h2 >Login</h2>
            <form action="">
    
                <label for="name">Username</label>
                <input type="text" name="username" id="usrnm"/>
                <label for="passwd">Password</label>
                <input type="password" name="password" id="passwd"/>
                <div className="rem">
                    <input type="checkbox" title="Remember me"/>
                    <label for="rem">Remember me</label>
                </div>
                
                <input type="submit" value="Login"/>
                
                
            </form>
    
            <p classNameName="signup">Do not have an account? <a href="#">Signup</a></p>
    
        </div>
    
        <img className="image" src="./jobimage.jpg" alt="Image"/>
    
    
    </div>
    
    <footer>
        @Saurabh
    </footer>
        </div>
    );
};

export default Login;