import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
      const data = {
          name: "Tapasya",
          email: "tapasya1011@gmail.com",
          message:"helloworld"
    }
    emailjs.send('service_oct1hjp', 'template_lon1myh', data, 'Kcux1VYvqoaedA6Sq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      console.log(form.current)
  };

    return (
    <div className="container">
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    </div>
  );
};
export default Email;