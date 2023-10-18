import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/operations';
import { selectAllNeededContacts } from '../redux/selectors';

export function ContactList() {
    const contacts = useSelector(selectAllNeededContacts);
    // const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    // const filteredContacts = contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(filter.toLowerCase())
    // );

    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    };

    return (
        <ul>
        {contacts.map(contact => (
            <li key={contact.id}>
            {contact.name}: {contact.number} <b></b>
                <button onClick={evt => {
                    handleDeleteContact(evt.target.value);
                }}>Delete</button>
            </li>
        ))}
        </ul>
    );
}
