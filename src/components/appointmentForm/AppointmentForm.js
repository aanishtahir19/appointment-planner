import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
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
  handleSubmit,
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        min={getTodayString}
      />
      <input
        type="text"
        placeholder="Time"
        onChange={(e) => setTime(e.target.value)}
        value={time}
      />
      <ContactPicker
        name="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        contacts={getContactNames()}
        placeholder="Appointment With"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
