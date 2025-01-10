import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import { addContact, fetchContacts } from "../../redux/contacts/operations";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectContacts } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();

  const handleAddContact = (contactData) => {
    dispatch(addContact(contactData));
  };

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm submit={handleAddContact} />
      {contacts.length > 0 && <SearchBox />}
      <ContactList />
    </>
  );
};
export default ContactsPage;
