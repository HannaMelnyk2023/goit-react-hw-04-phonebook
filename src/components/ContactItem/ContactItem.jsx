import React from 'react';
import css from "./ContactItem.module.css"

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li className={css.item}>
    {name}: {number}
    <button className={css.button}  onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);

export default ContactItem;
