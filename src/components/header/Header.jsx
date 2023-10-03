import React from 'react';
import { MdSunny, MdOutlineBedtime } from 'react-icons/md';

export default function Header({ changeShowMode, toggleDarkMode, darkMode }) {
    const handleButtons = (status) => {
        changeShowMode(status);
    };
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button type="button" onClick={() => toggleDarkMode()}>
                {darkMode ? <MdOutlineBedtime /> : <MdSunny />}
            </button>
            <div>
                <button type="button" onClick={() => handleButtons('all')} style={{ color: darkMode ? 'white' : 'black' }}>
                    All
                </button>
                <button type="button" onClick={() => handleButtons('active')} style={{ color: darkMode ? 'white' : 'black' }}>
                    Active
                </button>
                <button type="button" onClick={() => handleButtons('completed')} style={{ color: darkMode ? 'white' : 'black' }}>
                    Completed
                </button>
            </div>
        </header>
    );
}
