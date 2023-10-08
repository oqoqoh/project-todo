import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: '123', text: 'test1', status: 'active' },
        { id: '124', text: 'test2', status: 'active' },
    ]);
    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    };
    const handleUpdate = (updated) => setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));
    return (
        <section>
            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))}
            </ul>
            <AddTodo onAdd={handleAdd} />
        </section>
    );
}
