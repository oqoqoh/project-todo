import React, { useState } from 'react';

export default function Footer({ addTodoList }) {
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
        <footer>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add Todo" value={todoInput} onChange={handleInput}></input>
                <button type="subnit">Add</button>
            </form>
        </footer>
    );
}
