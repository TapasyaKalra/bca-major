/* eslint-disable no-unused-vars */
import React from 'react';
import { Card,CardHeader,CardBody, CardImg, CardText } from 'reactstrap';
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id,title, subtitle, image, price, description }) {
    
    const [{ basket }, dispatch] = useStateValue();

   
    const removefromBasket = () => {
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id,
        })
    }
  
    return (
        <div className = "" >
            <Card>
                <CardImg src = {image}/>
                <CardHeader className = "bg-primary text-light">{title}</CardHeader>
                <CardBody>
                    <CardText>₹{price}</CardText>
                    <button className = "btn btn-secondary" onClick = {removefromBasket}>Remove</button>
  
                </CardBody>
            </Card>
            
        </div>
    )
}

export default CheckoutProduct;