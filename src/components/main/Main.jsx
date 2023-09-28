import React from 'react';

export default function Main({ todoList, checkToggle, removeTodo }) {
    console.log('Main Compo / todoList ::', todoList);
    const handleCheckbox = (id) => {
        checkToggle(id);
    };
    const handleButton = (id) => {
        removeTodo(id);
    };
    return (
        <main>
            <ul>
                {todoList.map((todo) => {
                    return (
                        <li key={todo._id} style={{ display: 'flex', textDecorationLine: todo.done ? 'line-through' : 'none' }}>
                            <input type="checkbox" onClick={() => handleCheckbox(todo._id)}></input>
                            <p>{todo.title}</p>

                            <button style={{ marginLeft: 'auto' }} onClick={() => handleButton(todo._id)}>
                                delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}
