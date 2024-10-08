import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
import { selectContacts } from '../../redux/selectors';
import * as contactsOperations from '../../redux/contacts/contactsOperations';
import {
  Form,
  LabelField,
  InputField,
  ButtonAdding,
  LabelName,
} from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      // id: nanoid(),
      name,
      phone,
    };

    const isContactNameInList = contactName => {
      return contacts.find(contact => contact.name === contactName);
    };

    if (isContactNameInList(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(contactsOperations.addContact(newContact));

    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelField>
        <LabelName>Name</LabelName>
        <InputField
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </LabelField>

      <LabelField>
        <LabelName>Phone</LabelName>
        <InputField
          type="tel"
          name="phone"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          value={phone}
          onChange={handleInputChange}
        />
      </LabelField>

      <ButtonAdding type="submit">Add contact</ButtonAdding>
    </Form>
  );
};

export default ContactForm;
