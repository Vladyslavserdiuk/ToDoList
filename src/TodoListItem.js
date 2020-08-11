import React from 'react';


function TodoListItem(props) {

    const {todo, markAsDone, doAgain, remove} = props


    const isTodoDone = todo.done
    const todoTitle = todo.title
    const todoId = todo.id
    const titleStyle = isTodoDone === true ? {
        textDecoration: "line-through",
        listStyleType: "none"
    } : {listStyleType: "none"}

    return (
        <div>
        {isTodoDone ? (
                <li style={titleStyle}>
                    {todoTitle}
                    <button onClick={() => doAgain(todoId)}>Do again</button>
                    <button onClick={() => remove(todoId)}> X </button>
                </li>
            ) : (
                <li style={titleStyle}>
                    {todoTitle}
                    <button onClick={() => markAsDone(todoId)}>Mark as Done</button>
                    <button onClick={() => remove(todoId)}> X </button>
                </li>)
        }
        </div>
    );
}

export default TodoListItem;
