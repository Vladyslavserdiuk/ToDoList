import React from 'react';
import TodoListItem from './TodoListItem'


function TodoList(props) {
    const {markAsDone, doAgain, list, remove, toDoUpdate, movedUpList, index} = props


    return (
        <div>
            {list.map(el => <TodoListItem
                key={el.id}
                todo={el}
                markAsDone={markAsDone}
                doAgain={doAgain}
                remove={remove}
                toDoUpdate={toDoUpdate}
                movedUpList={movedUpList}
                index={index}
            />)}

        </div>
    );
}
export default TodoList;
