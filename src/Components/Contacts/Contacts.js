import React from 'react';
import PropTypes from 'prop-types';
import { Container, ContactsContainer, Button } from './Contacts.styled';

const RenderContacts = ({ contacts, onRemove }) => (
  <Container>
    {contacts.map(({ id, name, number }) => (
      <ContactsContainer key={id}>
        <p>
          {name}: {number}
        </p>
        <Button type="button" onClick={() => onRemove(id)}>
          Delete
        </Button>
      </ContactsContainer>
    ))}
  </Container>
);

export default RenderContacts;

RenderContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};
