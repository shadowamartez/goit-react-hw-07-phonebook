import React from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../../redux/filtersSlice';
import { Layout } from './Filter.styled';

export function Filter() {
    const dispatch = useDispatch();

    const handleFilterChange = event => {
        dispatch(update(event));
    };

    return (
        <Layout>
        <label htmlFor="filter">Find contacts by name</label>
        <input
            type="text"
            id="filter"
            name="filter"
            placeholder="Search contacts by name"
            onChange={e => {
                handleFilterChange(e.target.value);
            }}
        />
        </Layout>
    );
}




