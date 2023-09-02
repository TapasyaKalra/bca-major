import React,{useState} from 'react';
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

//import {useStateValue} from '../StateProvider';
function Login(props) {
    const history = useNavigate();
    //const [{user}] = useStateValue();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault(); //stops page from refreshing
        //Firebase code
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) => {
                if(auth){
                    history('/')//redirect back to home page
                }
            })
            .catch(error => alert(error.message))

    }
    const register = e => {
        e.preventDefault();

        //Firebase code
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log(auth);
                if(auth){
                    history('/')//redirect back to home page
                }
            })
            .catch(error => alert(error.message))
            const data = {
                name: "",
                email: email,
                subject: "Registered on Glam-Nation",
                message : "Hi, welcome to glam-nation. You will now receive updates on your orders, bookings and promotions from our team."
                }
            emailjs.send('service_oct1hjp', 'template_jpat9wi', data, 'Kcux1VYvqoaedA6Sq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    
    const validEmail = e => {
        var check = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value);
        if(!check)
            alert("Please enter valid email address");
    }
    const validPassword = e => {
        var val = e.target.value;
        if (val.length < 5)
            alert("Password must consist of more than 5 characters")
        
    }
    return(
        <>

        <div className = "row " >
            <span className ="display-1 text-center">Log In</span>
            <hr className = "mx-auto col-lg-6"/>
        </div>
        
            
        
            <div className = "mb-5 mt-3 container  border border-2  rounded p-5 w-50 bg-light ">

            <form>
                <div className = "row">
                    <div className = "col-12 col-md-5 col-lg-3">
                        <label for = "email" className = "form-label ">Email</label>
                    </div>
                    <div className = "col-12 col-md-7 col-lg-9" >
                        <input className = "form-control" type = "text" id = "email" name = "email" onBlur = {validEmail} value ={email} onChange = {e => setEmail(e.target.value)} />
                    </div>
                    
   
                </div>            
                <div className = "row mt-2">
                    <div className = "col-12 col-md-5 col-lg-3">
                        <label for = "password" className = "form-label">Password</label>
                    </div>
                    <div className = "col-12 col-md-7 col-lg-9 " >
                        <input className = "form-control" type = "password" id = "password" name = "password" onBlur = {validPassword} value ={password} onChange = {e => setPassword(e.target.value)}
                        />
                    </div>
                    
                </div>            
                <div className = "row mt-4" >   
                    <button className = "btn btn-secondary col-12 offset-md-4 col-md-4 " type = "submit" value = "submit" onClick = {signIn} >Login</button>
                </div>
                <div className = "row mt-3">
                    <button className = "btn btn-secondary col-12 offset-md-4 col-md-4" onClick = {register}>Create Account</button>
                </div>
                
                
            </form>
            </div>
        
       
        </>
    );
}

export default Login;