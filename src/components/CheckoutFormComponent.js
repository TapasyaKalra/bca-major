/* eslint-disable no-unused-vars */
import React,{useState,useEffect,useRef} from 'react';
import {Button,Form,Label, Input,FormGroup} from 'reactstrap';
import {useStateValue} from '../StateProvider';
import { db } from '../firebase';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from "../reducer";
import { useNavigate } from 'react-router-dom';
import axios from './axios';
import emailjs from '@emailjs/browser';

function CheckoutForm(){
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useNavigate();
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
        
     },[basket])
    
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card : elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            
        db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket : basket,
                name : name,
                contact : contact,
                address: address,
                created: paymentIntent.created,
                amount : paymentIntent.amount
            })
        
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
                type : 'EMPTY_BASKET'
            })
        }) 
        
        //Email
        var items = [];
        basket.forEach((item) => {
            items.push(item.title)
        }
        )
        var content = items.join(", ")
        const data = {
            name: name,
            email: user?.email,
            subject: "Order Confirmation",
            message : `Your order of ${content} has been confirmed. Further information will be shared with you once the order is shipped.`
            }
        emailjs.send('service_oct1hjp', 'template_jpat9wi', data, 'Kcux1VYvqoaedA6Sq')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        alert("Order Placed");
        history("/", { replace: true });
        
    }
    const handleReset = () => {
        setName(() => "")
        setContact(() => "")
        setAddress(() => "")
     }
    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    
    return(
            <>
            <div className = "container">
                <div class = "row" >
                    <span class ="display-1 text-center">Enter Your Details</span>
                    <hr class = "mx-auto col-lg-6"/>
                </div>
                <Form className = "mt-5 mb-5">
                    <FormGroup className = "row">
                        <Label className = "col-12 offset-md-2 col-md-2" htmlFor="email">Email</Label>
                        <div className = "col-12 col-md-6">
                            <Input className = ""  type="email" id="email" name="email" value = {user?.email} />
                        </div>
                    </FormGroup>
                    <FormGroup className = "row">
                        <Label className = "col-12 offset-md-2 col-md-2" htmlFor="name">Name</Label>
                        <div className = "col-12 col-md-6">
                            <Input value = {name} onChange = {e => setName(e.target.value)} className =""  type="text" id="name" name="name" />
                        </div>
                    </FormGroup>
                    <FormGroup className = "row">
                        <Label className = "col-12 offset-md-2 col-md-2" htmlFor="contact">Contact No. </Label>
                        <div className = "col-12 col-md-6">
                            <Input value = {contact} onChange = {e => setContact(e.target.value)} className =""  type="telnum" id="contact" name="contact" />
                        </div>
                    </FormGroup>
                    <FormGroup className = "row">
                    <Label className = "col-12 offset-md-2 col-md-2" htmlFor="payment">
                        Payment Method
                    </Label>
                    <div className = "col-12 col-md-6">
                        
                            <CardElement onChange={handleChange} options={{ hidePostalCode: true }}/>
                            {error && <div>{error}</div>}
                    </div>
                    
                    </FormGroup>
                    <FormGroup className = "row">
                        <Label className = "col-12 offset-md-2 col-md-2" htmlFor="address">Address</Label>
                        <div className = "col-12 col-md-6">
                            <Input value = {address} onChange = {e => setAddress(e.target.value)} className =""  type="textarea" id="address" name="address" rows= "5" />
                        </div>
                    </FormGroup>
                    <div className = "row">
                        <div className = "offset-4 col-2">
                        <Button disabled={processing || disabled || succeeded} onClick={handleSubmit}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                        </Button>
                        </div>
                        <div className = "col-2">
                            <Button className="m-auto btn btn-secondary" type="reset" onClick={handleReset}>Clear</Button>
                        </div>
                    </div>
                </Form>
                <div class = "row">
                    <span class="display-5 text-center">Cart ( {basket?.length} items ) : ₹{ getBasketTotal(basket)} </span>
                <div className = "col-8 offset-md-4 col-md-4">
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
                </div>
            </div>
               
            </>
        );    
}    

export default CheckoutForm;