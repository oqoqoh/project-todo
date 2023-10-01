import React from 'react';

export default function Header({ changeShowMode }) {
    const handleButtons = (status) => {
        changeShowMode(status);
    };
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button type="button">icon</button>
            <div>
                <button type="button" onClick={() => handleButtons('all')}>
                    All
                </button>
                <button type="button" onClick={() => handleButtons('active')}>
                    Active
                </button>
                <button type="button" onClick={() => handleButtons('completed')}>
                    Completed
                </button>
            </div>
        </header>
    );
}
