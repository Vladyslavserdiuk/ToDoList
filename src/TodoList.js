import React from 'react';
import TodoListItem from './TodoListItem'


function TodoList(props) {
    const {markAsDone, list} = props


    return (
        <div>
            {list.map(el => <TodoListItem todo={el} markAsDone={markAsDone}/>)}

        </div>
    );
}

export default TodoList;
