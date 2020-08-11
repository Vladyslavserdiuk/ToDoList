import React, {useState} from 'react';


function TodoListItem(props) {
    const [isEditMode, setIsEditMode] = useState(false)
    const {todo, markAsDone, doAgain, remove, toDoUpdate} = props


    const isTodoDone = todo.done
    const todoTitle = todo.title
    const todoId = todo.id
    const titleStyle = isTodoDone === true ? {
        textDecoration: "line-through",
        listStyleType: "none"
    } : {listStyleType: "none"}

    const [newTodo, setNewTodo] = useState(todoTitle)

    const inputHandler = (e) => {
        setNewTodo(e.target.value)
    };

    const saveButtonHandler = () => {
        toDoUpdate(todoId, newTodo)
        setIsEditMode(false)
    };

    return (
        <div>
            {isEditMode ? (
                <div>
                    <input onChange={inputHandler} value={newTodo}/>
                    <button onClick={saveButtonHandler}>Save</button>
                </div>
            ) : (
                <div>
                    {isTodoDone ? (
                        <li style={titleStyle}>
                            {todoTitle}
                            <button onClick={() => doAgain(todoId)}>Do again</button>
                            <button onClick={() => remove(todoId)}> X</button>
                            <button onClick={() => setIsEditMode(true)}>Edit</button>
                        </li>
                    ) : (
                        <li style={titleStyle}>
                            {todoTitle}
                            <button onClick={() => markAsDone(todoId)}>Mark as Done</button>
                            <button onClick={() => remove(todoId)}> X</button>
                            <button onClick={() => setIsEditMode(true)}>Edit</button>
                        </li>)
                    }</div>
            )}

        </div>
    );
}

export default TodoListItem;
