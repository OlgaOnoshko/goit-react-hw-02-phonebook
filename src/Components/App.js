import { Component } from 'react';
import Form from './Form/Form';
import RenderContacts from './Contacts/Contacts';
import contacts from './Contacts/contacts.json';

class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    const removeContact = this.removeContact;

    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <RenderContacts contacts={contacts} onRemove={removeContact} />
      </>
    );
  }
}

export default App;
