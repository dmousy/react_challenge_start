import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  
const getContactNames = () => {
  return contacts.map((contact) => contact.name);
};

  return (
    /* AppointmentForm */
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder="Appointment title" name='title' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
      <br />
      <ContactPicker placeholder="Appointment with" name='contact' value={contact} contacts={getContactNames()}
      onChange={(e)=>setContact=(e.target.value)} />
      <br />
      <input type='date' placeholder="Set date" name='date' value={date} min={getTodayString()}
      onChange={(e)=>setDate(e.target.value)} required />
      <br />
      <input type='time' placeholder="Set time" name='time' value={time} onChange={(e)=>setTime(e.target.value)} required />
      <br />
      <input type='submit' value='Add Apointment' />
    </form>
  );
};
