import React from 'react';
import {NavLink} from 'react-router-dom';
function Contact(){
    return(
        <>
            <div class="container">
                <div class = "row" >
                    <span class ="display-1 text-center">Contact Us </span>
                    <hr class = "mx-auto col-lg-6"/>
                </div>
                <div id = "social-contact" class = "row">
                    <a class = "col-12 col-md-2 offset-md-3" href = "https://www.facebook.com/Richas-MallikaMakeovers-795246434019167/?ref=page_internal" target="_blank"  rel="noreferrer"><i class="text-dark fa fa-facebook fa-5x"></i></a>
                    <a class = "col-12 col-md-2" href= "https://www.instagram.com/richamallikamakeovers/" target="_blank"  rel="noreferrer"><i class="text-dark fa fa-instagram fa-5x"></i></a>
                    <a class = "col-12 col-md-2" href="mailto:username10112000@gmail.com" target="_blank"  rel="noreferrer"><i class="text-dark fa fa-envelope fa-5x"></i></a>
                </div>
            </div>
            <div class = "container my-5" id = "address">
                <div class = "row mb-2">
                    <div class = "offset-md-2 col-md-2 border-end">Address</div>
                    <div class = "col-md-6">Karol Bagh West Extension Area, Block 1A, Sat Nagar, Karol Bagh, New Delhi, Delhi 110005</div>
                </div>
                <div class = "row mb-2">
                    <div class = "offset-md-2 col-md-2 border-end">Phone</div>
                    <div class = "col-md-6">9811600026</div>
                </div>
                <div class = "row mb-2">
                    <div class = "offset-md-2 col-md-2 border-end">Email</div>
                    <div class = "col-md-6"><a href="mailto:username10112000@gmail.com">glam-nation@gmail.com</a></div>
                </div>
                <div class = "row mb-2">
                    <div class = "offset-md-2 col-md-2 border-end">Web</div>
                    <div class = "col-md-6"><NavLink to = "/home">https://glam-nation-f7f58.web.app/</NavLink></div>
                </div>
        
            </div>
        </>
    );
}
export default Contact;