import React from 'react';

export default function Header2({ filters, filter, onFilterChange }) {
    return (
        <header>
            <ul>
                {filter.map((value, index) => (
                    <li key={index}>
                        <button>{value}</button>
                    </li>
                ))}
            </ul>
        </header>
    );
}
