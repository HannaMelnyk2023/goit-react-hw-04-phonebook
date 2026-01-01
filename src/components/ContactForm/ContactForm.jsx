// import React, { Component } from 'react';
import { useState } from 'react';

export default function ContactForm () {
  const { name, setName } = useState('');
  const { number, setNumber } = useState('');
  // state = {
  //   name: '',
  //   number: '',
  // };

  // оновлення name при введенні

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  // новий контакт
  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name.trim(), number.trim());
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            // required
          />
        </label>
        <label>
          Tel:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            // required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
