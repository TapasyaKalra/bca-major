import React from 'react';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Pricing from './PricingComponent';
import BridalGallery  from './BridalGalleryComponent';
import PartyGallery  from './PartyGalleryComponent';
import EngagementGallery  from './EngagementGalleryComponent';
import Product from './ProductComponent';
import Checkout from './CheckoutComponent';
import {Routes, Route} from 'react-router-dom';
import Login from './LoginComponent';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Email from './Email';
import CheckoutForm from './CheckoutFormComponent';

function Main(){
    
    const promise = loadStripe('pk_test_51KI8ktSIXX3K2OAQ7gdhHElD7YhyF0D5V3ZO3a80a1ExxttxlxF2Ano4u4GmZkFVn69Y0bvuFXlJEzsuYkWzmvuj00GYwzYv94');

        return(
            <>
                <Header/>
                <Elements stripe={promise}>
                    <Routes>
                    <Route  path = "/home"  element = {<Home/>} />
                    <Route  path = "/contactus" element = {<Contact/>}/>
                    <Route  path = "/aboutus" element = {<About/>}/>
                    <Route  path = "/pricing" element = {<Pricing/>}/>
                    <Route  path = "/bridalgallery" element = {<BridalGallery/>}/>
                    <Route  path = "/partygallery" element = {<PartyGallery/>}/>
                    <Route  path = "/engagementgallery" element = {<EngagementGallery/>}/>
                    <Route  path = "/products" element = {<Product/>}/>
                    <Route  path = "/checkout" element = {<Checkout/>}/>
                    <Route path="/checkoutform" element={<CheckoutForm/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/email" element={<Email />} />
                   
                    <Route  path = "" element = {<Home/>}/>
                    
                    </Routes>
                </Elements>
                <Footer/>
            </>
        );
    
}
export default Main;