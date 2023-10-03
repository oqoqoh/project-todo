import React, { useEffect, useState } from 'react';

export default function Main({ todoList, checkToggle, removeTodo, showMode, darkMode }) {
    const [showTodoList, setShowTodoList] = useState([]);

    const handleCheckbox = (id) => {
        checkToggle(id);
    };
    const handleButton = (id) => {
        removeTodo(id);
    };

    useEffect(() => {
        if (showMode === 'all') setShowTodoList(todoList);
        else if (showMode === 'active') setShowTodoList([...todoList].filter((todo) => todo.done === false));
        else setShowTodoList([...todoList].filter((todo) => todo.done === true));
    }, [showMode, todoList]);
    return (
        <main style={{ minHeight: 100 }}>
            <ul>
                {showTodoList.map((todo) => {
                    return (
                        <li key={todo._id} style={{ display: 'flex', textDecorationLine: todo.done ? 'line-through' : 'none' }}>
                            <input type="checkbox" onChange={() => handleCheckbox(todo._id)} checked={todo.done ? true : false} />
                            <p>{todo.title}</p>

                            <button style={{ marginLeft: 'auto', color: darkMode ? 'white' : 'black' }} onClick={() => handleButton(todo._id)}>
                                delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}
