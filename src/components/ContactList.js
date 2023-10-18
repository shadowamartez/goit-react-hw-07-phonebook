import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/operations';
import { selectAllNeededContacts } from '../redux/selectors';

export function ContactList() {
    const contacts = useSelector(selectAllNeededContacts);
    const dispatch = useDispatch();


    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    };

    return (
        <ul>
        {contacts.map(contact => (
            <li key={contact.id}>
            {contact.name}: {contact.phone} <b></b>
                <button onClick={evt => {
                    handleDeleteContact(evt.target.value);
                }}>Delete</button>
            </li>
        ))}
        </ul>
    );
}
