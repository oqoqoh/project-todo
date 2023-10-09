import React, { useState } from 'react';
import AddTodo from './AddTodo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: '123', text: 'test1', status: 'active' },
        { id: '124', text: 'test2', status: 'active' },
    ]);
    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    };
    return (
        <section>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>todo.text</li>
                ))}
            </ul>
            <AddTodo onAdd={handleAdd} />
        </section>
    );
}
