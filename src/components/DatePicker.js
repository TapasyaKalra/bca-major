import React, { useState} from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import { Button } from 'reactstrap';
import { db } from '../firebase';
import {useStateValue} from '../StateProvider';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import '../datepicker.css';
function DatePicker() {
    // eslint-disable-next-line no-unused-vars
    const [{ user, basket }] = useStateValue();
    const [startDate, setStartDate] = useState(new Date())
    const [info, setInfo] = useState([]);
    const history = useNavigate();

    function handleSelect(date) {
        setStartDate(date);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!user) {
            alert("Please log in to book makeups");
            history('/login');
        }
            
        var flag = 0;
        db.collection('bookings').onSnapshot((snapshot) => {
            setInfo(
                snapshot.docs.map((doc) => ({
                    id:doc.id,
                    data: doc.data(),
                }))
            );
        });
        
        info?.forEach((data) => {
            // eslint-disable-next-line 
            if (data.id == startDate) {
                alert("Already Booked, Please select another date");
                flag = 1;
            }
        })
        if (flag === 0) {
            db
                .collection('bookings')
                .doc(String(startDate))
                .set({
                    uid: user?.uid,
                    email: user?.email,
                    date: String(startDate)
                    
                })
            const data = {
                    name: "",
                    email: user?.email,
                    subject: "Booking Confirmed",
                    message : `Hi, your makeup booking has been confirmed for ${startDate.toDateString()}. Please be on time and carry your outfit along with your accessories with you. In case of any changes please contact the glam-nation team 24-hours before your appointment.`
                    }
            emailjs.send('service_oct1hjp', 'template_jpat9wi', data, 'Kcux1VYvqoaedA6Sq')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            alert("Booking Confirmed");
            window.scrollTo(0, 0)
        }
    }
    return (
        <>          
            <Calendar className = "col-12" date={startDate} onChange={handleSelect} />
            <div class="text-center mt-3">
                <Button onClick={ handleSubmit} class="col-4 btn btn-secondary">Book</Button>
            </div>
        </>
    )
}
export default DatePicker;