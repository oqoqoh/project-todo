import { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
    const [todoList, setTodoList] = useState([]);
    const [showMode, setShowMode] = useState('all');

    const addTodoList = (val) => {
        let data = {
            _id: new Date().getTime(),
            title: val,
            done: false,
        };

        setTodoList((prev) => [...prev, data]);
    };
    const checkToggle = (todoId) => {
        const newArr = [...todoList].map((todo) => {
            if (todo._id !== todoId) return todo;
            else {
                return { ...todo, done: !todo.done };
            }
        });

        setTodoList(newArr);
    };
    const changeShowMode = (status) => {
        setShowMode(status);
    };
    const removeTodo = (todoId) => {
        const filterTodos = [...todoList].filter((todo) => todo._id !== todoId);
        setTodoList(filterTodos);
    };

    return (
        <div id="App">
            <h1 className="a11y-hidden">Todo List</h1>
            <div className="cnt-todo">
                <Header changeShowMode={changeShowMode} />
                <Main todoList={todoList} checkToggle={checkToggle} removeTodo={removeTodo} showMode={showMode} />
                <Footer addTodoList={addTodoList} />
            </div>
        </div>
    );
}
export default App;
