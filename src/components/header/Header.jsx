import React from 'react';

export default function Header({ changeShowMode }) {
    const handleButtons = (status) => {
        changeShowMode(status);
    };
    return (
        <header>
            <button type="button">icon</button>
            <button type="button" onClick={() => handleButtons('all')}>
                All
            </button>
            <button type="button" onClick={() => handleButtons('active')}>
                Active
            </button>
            <button type="button" onClick={() => handleButtons('completed')}>
                Completed
            </button>
        </header>
    );
}
