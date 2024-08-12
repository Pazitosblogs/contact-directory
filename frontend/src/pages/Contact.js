
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      const res = await axios.get('/api/contacts');
      setContacts(res.data);
    }

    fetchContacts();
  }, []);

  const addContact = async contact => {
    const res = await axios.post('/api/contacts', contact);
    setContacts([...contacts, res.data]);
  };

  const deleteContact = async id => {
    await axios.delete(`/api/contacts/${id}`);
    setContacts(contacts.filter(contact => contact._id !== id));
  };

  return (
    <div className="grid-2">
      <div>
        <ContactForm addContact={addContact} />
      </div>
      <div>
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      </div>
    </div>
  );
};

export default Contact;
