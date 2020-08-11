import React, {useState} from 'react';
import TodoCreateForm from "./TodoCreateForm";
import TodoList from "./TodoList";

const initialList = [
    {id: 1, title: 'first Todo', done: false},
    {id: 2, title: 'second Todo', done: false},
    {id: 3, title: 'third Todo', done: false}
]


function App() {

    const [list, setList] = useState(initialList)

    const markAsDone = (todoId) => {
        const newList = [...list].map(el => {
            if (el.id === todoId)
            return {...el, done: true}
            return el;
        })
        setList(newList)
    }

    const doAgain = (todoId) => {
        const newList = [...list].map(el => {
            if (el.id === todoId)
                return {...el, done: false}
            return el;
        })
        setList(newList)
    };

    const create = title => {
        console.log(title);
        const newItem = {
            id: Math.random() * 18,
            title,
            done: false
        }
        const updateList = [...list, newItem]
        setList(updateList);
    };

    const remove = (todoId) => {
        const newList = [...list].filter(el => el.id !== todoId)
        setList(newList)
    };

    return (
        <div>
            <TodoCreateForm create={create}/>
            <TodoList markAsDone={markAsDone} list={list} doAgain={doAgain} remove={remove}/>

        </div>
    );
}

export default App;
