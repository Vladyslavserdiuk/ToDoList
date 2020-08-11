import React from 'react';
import TodoListItem from './TodoListItem'


function TodoList(props) {
    const {markAsDone, doAgain, list, remove, toDoUpdate} = props


    return (
        <div>
            {list.map(el => <TodoListItem key={el.id} todo={el} markAsDone={markAsDone} doAgain={doAgain} remove={remove} toDoUpdate={toDoUpdate}/>)}

        </div>
    );
}

export default TodoList;
