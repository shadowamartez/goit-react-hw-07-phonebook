import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filters.filter;

export const selectAllNeededContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        if (filter.trim()) {
        return contacts.filter(contact => {
            return contact.name.toLowerCase().includes(filter?.toLowerCase());
        });
        } else {
        return contacts;
        }
    }
);