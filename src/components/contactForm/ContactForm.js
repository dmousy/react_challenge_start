import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
   /*  ContactForm */
  <form onSubmit={handleSubmit}>
  <input type='text' placeholder="Enter contact name" name='name' value={name} onChange={(e)=>setName(e.target.value)} required />
  <br />
  <input type='tel' placeholder="Enter phone number (10 digits)" name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} 
    //regex is for 10 digit numbers
    pattern='^\(?[\d]{3}\)?[\s-]?[\d]{3}[\s-]?[\d]{4}$' required/>
  <br />
  <input type='email' placeholder="Enter email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
  <br />
  <input type='submit' value='Add Contact' />
  </form>
    
  );
};
