import React from 'react';


function TodoListItem(props) {

    const {todo, markAsDone} = props


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
                    <button>Do again</button>
                </li>
            ) : (
                <li style={titleStyle}>
                    {todoTitle}
                    <button onClick={() => markAsDone(todoId)}>Mark as Done</button>
                </li>)
        }
        </div>
    );
}

export default TodoListItem;
