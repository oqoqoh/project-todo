import React from 'react';

export default function Main({ todoList, checkToggle }) {
    console.log('Main Compo / todoList ::', todoList);
    const handleCheckbox = (id) => {
        checkToggle(id);
    };
    return (
        <main>
            <ul>
                {todoList.map((todo) => {
                    return (
                        <li key={todo._id} style={{ display: 'flex' }} onClick={() => handleCheckbox(todo._id)}>
                            <input type="checkbox"></input>
                            <p style={{ textDecorationLine: todo.done ? 'line-through' : 'none' }}>{todo.title}</p>

                            <button style={{ marginLeft: 'auto' }}>icon</button>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}
