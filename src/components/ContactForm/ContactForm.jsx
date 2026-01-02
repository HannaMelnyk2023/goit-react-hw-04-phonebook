// import React, { Component } from 'react';
import { useState } from 'react';

export default function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // оновлення name при введенні

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };
  // новий контакт
  const handleSubmit = event => {
    event.preventDefault();
    onAddContact(name.trim(), number.trim());
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          // required
        />
      </label>
      <label>
        Tel:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          // required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
