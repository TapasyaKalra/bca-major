import React,{useState} from 'react';
import {UncontrolledCarousel, Button} from 'reactstrap';
import {db} from '../firebase';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

function Home(props){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name,email);
            db
                 .collection('MailingList')
                 .doc(email)
                 .set({
                     name : name
                 })
        const data = {
            name: name,
            email: email,
            subject:"Added to the Mailing List",
            message: "You have been added to our Mailing List. Rejoice, as you will be receiving special offers and discounts."
        }
        emailjs.send('service_oct1hjp', 'template_jpat9wi', data, 'Kcux1VYvqoaedA6Sq')
                 .then((result) => {
                     console.log(result.text);
                 }, (error) => {
                     console.log(error.text);
                 });
        alert("Added to Mailing List");
        setName("");
        setEmail("");
    }
    return(
        <>
            <div id="call-to-action" className="container-fluid px-5 ">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start text-light">
                        <h1 className="display-4 fw-bold lh-1 mb-3 text-secondary">Keep Calm and Be Glam</h1>
                        <p className="col-lg-10 fs-4 fw-light">Enter your details to get a free consultation today!</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5">
                        <form className="p-4 p-md-5 border rounded-3 bg-light">
                            <div className="pt-0">
                                <h3 className = "display-5 text-center" id="signup">Sign up for our Mailing List</h3>
                            </div>
                            <div className="form-floating mb-3">
                                <input name = "name" value = {name} onChange = {e => setName(e.target.value)} type="text" className="form-control" placeholder="Name"/>
                                <label>Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input name = "email" value ={email} onChange = {e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email"/>
                                <label>Email</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-secondary" type="submit" onClick = {handleSubmit}>Submit</button>
                            
                            
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid mx-0 px-0">
                <h2 className = "display-1 text-center mb-0">Our Makeups</h2>
                <hr className = "text-primary mx-auto mt-0"></hr>
            </div>
            <div className="text-center mb-2">
            <Link to = "/pricing">
                    <Button>Book Now</Button>
            </Link>
            </div>
            <div id = "frontPageCarousel" className = "mb-5">
                <UncontrolledCarousel
                    items={[
                        {
                            altText: 'Bridal1',
                            caption: '',
                            key: 1,
                            src: 'assets/images/Bridal/212664617_2129992087143547_5623981376915721709_n.jpg'
                        },
                        {
                            altText: 'Engagement1',
                            caption: '',
                            key: 2,
                            src: 'assets/images/Engagement/217177803_2135978486544907_4439470303811477131_n.jpg'
                        },
                        {
                            altText: 'Party1',
                            caption: '',
                            key: 3,
                            src: 'assets/images/Party/132322938_1961256740683750_7953738352058724177_n.jpg'
                        },
                        {
                            altText: 'Bridal2',
                            caption: '',
                            key: 4,
                            src: 'assets/images/Bridal/215147337_2133564176786338_5892657411754226623_n.jpg'
                        },
                        {
                            altText: 'Party2',
                            caption: '',
                            key: 5,
                            src: 'assets/images/Party/203842769_2111675538975202_2982593656079037980_n.jpg'
                        },
                        {
                            altText: 'Engagement2',
                            caption: '',
                            key: 6,
                            src: 'assets/images/Engagement/209227935_2119684101507679_6011780119794478909_n.jpg'
                        },
                        
                        
                    ]}
                />
            </div>
            
            
        </>
    );
}

export default  Home;