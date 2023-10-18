import React from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../../redux/filtersSlice';
import { Layout } from './Filter.styled';

export function Filter() {
    const dispatch = useDispatch();

    const handleFilterChange = event => {
        dispatch(update(event.target.value));
    };

    return (
        <Layout>
        <label htmlFor="filter"></label>
        <input
            type="text"
            id="filter"
            name="filter"
            placeholder="Search contacts by name"
            onChange={handleFilterChange}
        />
        </Layout>
    );
}




