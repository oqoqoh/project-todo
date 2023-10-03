import React, { useState } from 'react';

export default function Footer({ addTodoList, darkMode }) {
    const [todoInput, setTodoInput] = useState('');
    const handleInput = (e) => {
        setTodoInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodoList(todoInput);
        setTodoInput('');
    };
    return (
        <footer style={{ display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add Todo" value={todoInput} onChange={handleInput}></input>
                <button type="subnit" style={{ color: darkMode ? 'white' : 'black' }}>
                    Add
                </button>
            </form>
        </footer>
    );
}
