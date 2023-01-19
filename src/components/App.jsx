// import { Component } from 'react';
import FormPhoneBook from './FormPhoneBook/FormPhoneBook';
import ContactList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading } from 'redux/selectors';
import { selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <Section title="PhoneBook">
        <FormPhoneBook />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Section>
    </div>
  );
};

export default App;
