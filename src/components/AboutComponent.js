import React from 'react';

function About(){
    return(
        <>
        <div className ="container">            
            <div className  = "row" >
                <span className  ="display-1 text-center">About Us </span>
                <hr className  = "mx-auto col-lg-6"/>
            </div>
            <div className  = "row" id="about-us">
                <div className  = "mx-auto mb-1 col-12 col-md-6 col-lg-4">
                    <div className  = "figure">
                        <img src="assets/images/founder.jpg" className  = "w-100 rounded" id="founder" alt="founder"/>
                        <figcaption className ="figure-caption">Richa Gulati</figcaption>
                    </div>
                </div>
                <div className  = "px-3 col-12 col-md-6 col-lg-8">
                Makeup has been around for over a hundred thousand years, and beauty is only evolving. What started with red pigment clay is now a fascinating world of foundation, rouge, lipstick, blush, mascara, eye shadow, eye liner, eye caramba!
                <br/><br/>
                We at Glam Nation offer highest quality products and world-className  celebrity approved makeovers to make your special day even more memorable.
                <br/><br/>
                The products on our store have been tried and tested by our makeup artists in all types of professional settings to ensure you get nothing but the best.
                <br/><br/>
                Our founder Ms. Richa Gulati has been in the industry for more than 20 years. She has first-hand experience of working with many high-profile clients. All of our artists have received hands-on training from Ms. Richa Gulati herself.
                </div>
                    
            </div>
        </div>
        </>
    );

    
}
export default About;