import React from 'react';
import { BsTrash3 } from 'react-icons/bs';

export default function Todo({ todo, onUpdate, onDelete }) {
    return (
        <li>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">{todo.text}</label>
            <button>
                <BsTrash3 />
            </button>
        </li>
    );
}
