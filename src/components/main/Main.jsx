import React, { useEffect, useState } from 'react';

export default function Main({ todoList, checkToggle, removeTodo, showMode }) {
    const [activeTodos, setActiveTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
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
        <main>
            <ul>
                {showTodoList.map((todo) => {
                    return (
                        <li key={todo._id} style={{ display: 'flex', textDecorationLine: todo.done ? 'line-through' : 'none' }}>
                            <input type="checkbox" onChange={() => handleCheckbox(todo._id)} checked={todo.done ? true : false} />
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
