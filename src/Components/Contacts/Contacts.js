import React from 'react';

const RenderContacts = ({ contacts, onRemove }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={() => onRemove(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default RenderContacts;
