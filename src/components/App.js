import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading, selectAllNeededContacts } from '../redux/selectors';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyles } from './GlobalStyles';

export const App = () => {
    const dispatch = useDispatch();
    const visibleContacts = useSelector(selectAllNeededContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <h1>Phonebook</h1>
            {isLoading && !error ? (
            <p>Loading...</p>
            ) : (
                <>
                    <ContactForm />
                    <Filter />
                    {!visibleContacts.length ? (
                        <p>There is no contacts</p>
                    ) : (
                    <>
                        <h2>Contacts</h2>
                        <ContactList />
                    </>
                    )}
                </>
            )}
            <GlobalStyles></GlobalStyles>
        </div>
    );
}

