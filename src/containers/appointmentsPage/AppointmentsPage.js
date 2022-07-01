import { React, useState } from "react";
import { TileList } from "../../components/tileList/TileList";
import { AppointmentForm} from '../../components/appointmentForm/AppointmentForm';

export const AppointmentsPage = ({
 
  appointments,
  addAppointment,
  contacts

}) => {
  /*
  Define state variables for 
  appointment info
  */
 
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState(contacts.lenght > 0 ? contacts[0].name : '');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointment(title, contact, date, time);
   setTitle('');
   setContact('');
   setDate('');
   setTime('');

  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        contacts={contacts}
        title={title} setTitle={setTitle}
        contact={contact} setContact={setContact}
        date={date} setDate={setDate}
        time={time} setTime={setTime}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <h1>Algo</h1>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};
