import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contactsOperations';
import { ContactsItem, ButtonDeleting } from './ContactItem.styled';

export default function ContactItem({ id, name, phone }) {
  const dispatch = useDispatch();

  return (
    <ContactsItem>
      <p>{name}: </p>
      <p> {phone}</p>

      <ButtonDeleting
        type="button"
        onClick={() => dispatch(contactsOperations.deleteContact(id))}
      >
        Delete
      </ButtonDeleting>
    </ContactsItem>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
