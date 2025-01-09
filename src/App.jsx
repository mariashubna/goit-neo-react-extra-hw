import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "./redux/selectors";
import { fetchContacts } from "./redux/contactsOps";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <SearchBox />}
      <ContactList />
    </div>
  );
}

export default App;
