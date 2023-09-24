import { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState({});
    const date = new Date();
    const addTodoList = (val) => {
        let data = {
            _id: new Date().toString(),
            title: val,
            done: false,
        };
        setTodoList((prev) => prev.push(data));
        console.log(todoList);
    };
    return (
        <div id="App">
            <h1 className="a11y-hidden">Todo List</h1>
            <div className="cnt-todo">
                <Header />
                <Main />
                <Footer addTodoList={addTodoList} />
            </div>
        </div>
    );
}
export default App;
