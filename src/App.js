import { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import TodoList from './components/TodoList/TodoList';
import Header2 from './components/header/Header2';

const filters = ['all', 'active', 'completed'];

function App() {
    const [todoList, setTodoList] = useState([]);
    const [showMode, setShowMode] = useState('all');
    const [darkMode, setDarkMode] = useState(false);

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
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    //리펙토리 코드
    const [filter, setFilter] = useState(filter[0]);

    return (
        <>
            <Header2 filters={filters} filter={filter} onFilterChange={(filter) => setFilter(filter)} />
            <TodoList filter={filter} />
            <div id={darkMode ? 'App-dark' : 'App'}>
                <h1 className="a11y-hidden">Todo List</h1>
                <div className={darkMode ? 'cnt-todo-dark' : 'cnt-todo'}>
                    <Header changeShowMode={changeShowMode} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                    <Main todoList={todoList} checkToggle={checkToggle} removeTodo={removeTodo} showMode={showMode} darkMode={darkMode} />
                    <Footer addTodoList={addTodoList} darkMode={darkMode} />
                </div>
            </div>
        </>
    );
}
export default App;
