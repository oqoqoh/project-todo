import React from 'react';

export default function Todo({ todo, onUpdate, onDelete }) {
    return (
        <li>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">{todo.text}</label>
            <button>delete</button>
        </li>
    );
}
