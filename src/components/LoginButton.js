import React from 'react';
import { useStateValue } from '../StateProvider';
import { Button } from 'reactstrap';
import { auth } from '../firebase';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
function LoginButton() {
    const [{ user }] = useStateValue();
    const history = useNavigate();
    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
        history(0);
        
    }
    return (
        <>
        {user ?
            <Button outline onClick = {handleAuthentication}>
                    <span className="fa fa-sign-in fa-lg" ></span>Logout
            </Button>
                :
            <Link to = "/login">
                    <Button outline >
                        <span className="fa fa-sign-in fa-lg"></span> Login
                    </Button>
            </Link>
        }
        </>
    )
}
export default LoginButton;













