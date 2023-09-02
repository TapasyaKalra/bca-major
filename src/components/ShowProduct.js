/* eslint-disable no-unused-vars */
import React from "react";

import { Card, CardImg, CardText, CardBody,CardSubtitle, CardHeader } from 'reactstrap';
import { useStateValue } from "../StateProvider";
function ShowProduct({id,title,subtitle,image,price,description}){
    const [{ basket }, dispatch] = useStateValue();
    //const [ dispatch] = useStateValue();

    const addToBasket = () => {
    
        dispatch({
        type: "ADD_TO_BASKET",
        item: {
            id: id,
            title: title,
            subtitle: subtitle,
            image: image,
            price: price,
            description: description,
        },
    });
  };
    return(
        <div className = "col-12 col-md-3 mb-2">
            <Card key={id} className = "h-100">
            <CardImg src = {image}/>
            <CardHeader className = "bg-primary text-light">{title}</CardHeader>
            <CardBody className="product-body">
                <CardSubtitle className = "text-muted ">{subtitle}</CardSubtitle>
                <CardText>{description}</CardText>
                <div className = "buy "  >
                    <div class="price text-success"><h5 class="mt-4">₹{price}</h5></div>
                    <button onClick={addToBasket} className = "btn btn-secondary mt-3"><i className = "fa fa-shopping-cart"></i>Add to Cart</button>
                </div>
            </CardBody>
        </Card>
        </div>
        
    );
    }
    
    

export default ShowProduct;