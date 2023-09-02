/* eslint-disable no-unused-vars */
import React from "react";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import CheckoutProduct  from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import {NavLink} from 'react-router-dom';

function Subtotal() {
  
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className = "display-5 fs-3">
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </div>
            
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      
      
    </div>
  );
}

function Checkout() {
  //const [{ basket, user }, dispatch] = useStateValue();
  const [{ basket, user }] = useStateValue();
  if(user){
    return (
    
      <div className="container mb-3">    
        <div class = "row mb-3" >
          
            <span class ="display-3 text-center"> Shopping Basket</span>
            <span class ="display-5 text-center"> Hello, {user?.email}</span>
            <hr class = "mx-auto col-lg-6"/>
        </div>
        <div className="row">
          <div className = "col-12 offset-md-2 col-md-4">
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            ))}
  
          </div>
        
  
          <div className="col-12 col-md-4">
            <Subtotal />
            <NavLink to = "/checkoutform">
            <button  className = "mt-3 btn btn-secondary btn-lg">Proceed to Checkout</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
  else{
    return (
    
      <div className="container mb-3">    
        <div class = "row mb-3 text-center" >
            <span class ="display-3 ">Please log in to continue</span>
            
            <hr class = "mx-auto col-lg-6"/>
            <NavLink to = '/login'>
              <button class = "btn btn-secondary">Login</button>
            </NavLink>
        </div>
        
      </div>
    );
  }
  
}

export default Checkout;