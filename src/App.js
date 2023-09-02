import React, {useEffect} from 'react';
import './App.css';
import Main from './components/MainComponent'
import {BrowserRouter} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{ }, dispatch] = useStateValue('');
  
  useEffect(()=>{
    
    auth.onAuthStateChanged(authUser => {
      console.log('USER :',authUser);

      if(authUser){
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      }
      else{
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  
    return (
      <BrowserRouter>
                <div>
                  <Main />
                </div>
      </BrowserRouter>
    );
    
}

export default App;
