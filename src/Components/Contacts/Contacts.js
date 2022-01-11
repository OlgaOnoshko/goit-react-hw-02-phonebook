import React from 'react';
import PropTypes from 'prop-types';

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

RenderContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};
