import React from 'react';
import {NavLink} from 'react-router-dom';

function Footer(props){
    return(
        <div className = "footer bg-primary text-light m-0">
            <div className = "container ">
                <div className = "row  ">
                    <div className = "col">
                        <img src="assets/images/icon.png" id = "footer-logo" alt = "logo"/ >
                    </div>
                    <div className = "d-none d-md-block col">
                        © Glam Nation<br/>
                        The most alluring thing a woman can do is have confidence. Here at Glam Nation, we make sure that you walk out of our salon looking great and feeling confident as ever.
                    </div>
                    <div className = "col">
                    
                    </div>
                    <div className = "col">
                        Karol Bagh West Extension Area, Block 1A, Sat Nagar, Karol Bagh, New Delhi, Delhi 110005
                        <br/>9811600026
                    </div>
                    <div className = "col footer-border">
                        <a href = "https://www.facebook.com/Richas-MallikaMakeovers-795246434019167/?ref=page_internal" target="_blank" rel="noreferrer" className="text-light text-decoration-none">
                            <i className="text-light fa fa-facebook fa-2x"></i> 
                            &nbsp;Facebook
                        </a>
                        <br/><br/>
                        <a href= "https://www.instagram.com/richamallikamakeovers/" target="_blank"  rel="noreferrer" className="text-light text-decoration-none">
                            <i className="text-light fa fa-instagram fa-2x"></i> 
                            &nbsp;Instagram
                        </a>
                    </div>
                    <div className = "col footer-border">
                        <a href = "mailto:mallikamakeovers@gmail.com" className="text-light text-decoration-none">
                            Help
                        </a>
                        <br/>
                        <NavLink to = "/contactus" className="text-light text-decoration-none">
                            Contact Us
                        </NavLink >
                        <br/>
                        <NavLink to = "/aboutus" className="text-light text-decoration-none">
                            About Us
                        </NavLink >
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;