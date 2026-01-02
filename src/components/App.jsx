// import React, { Component } from 'react';
import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = (contactName, contactNumber) => {
    // перевірка на порожнечу
    if (!contactName.trim() || !contactNumber.trim()) {
      // alert('Будь ласка, будьте лапочкою, заповніть усі поля');
      return;
    };
    // перевірка на дублі
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${contactName} is alredy in contacts.`);
      return;
    };

    const newContact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  // видалення контакту
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };
  //СВІТЛО В АУТ
  // оновлення фільтру
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };
  // фільтр без регістру
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
