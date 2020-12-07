import React from "react";
import "./ContactForm.css";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-container">
        <div className="form-left">
          <p>QUESTION?</p>
          <p>WE ARE HERE TO HELP!</p>
        </div>
        <div className="form-right">
          <div className="name-email">
            <div className="form-column">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                name="name"
                ref={register({
                  required: "Name is Required",
                  minLength: {
                    value: 3,
                    message: "Your name must contain at least 3 characters",
                  },
                })}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className="form-column">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                name="email"
                ref={register({
                  required: "Email is Required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                    message: "Invalid Email Address.",
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
          </div>
          <div className="form-messageArea">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              type="textarea"
              name="message"
              rows={5}
              cols={5}
              ref={register({ required: "Message is Required" })}
            />
            {errors.message && <span>{errors.message.message}</span>}
          </div>
          <button type="submit">SEND</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
