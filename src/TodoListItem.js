import React, {useState} from 'react';


function TodoListItem(props) {
    const [isEditMode, setIsEditMode] = useState(false)
    const {todo, markAsDone, doAgain, remove, toDoUpdate, movedUpList, index} = props


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

    const todoUpMove = () => {
        movedUpList(index)
    }

    return (
        <div>
            {isEditMode ? (
                <div>
                    <input onChange={inputHandler} value={newTodo}/>
                    <button class="btn btn-outline-dark btn-sm"  onClick={saveButtonHandler}>Save</button>
                </div>
            ) : (
                <div>
                    {isTodoDone ? (
                        <li style={titleStyle}>
                            {todoTitle}
                            <button class="btn btn-outline-dark btn-sm" onClick={() => doAgain(todoId)}>Do again</button>
                            <button class="btn btn-outline-danger btn-sm" onClick={() => remove(todoId)}> X</button>
                            <button class="btn btn-outline-secondary btn-sm" onClick={() => setIsEditMode(true)}>Edit</button>
                            <button class="btn btn-outline-secondary btn-sm" onClick={movedUpList}>Up</button>
                        </li>
                    ) : (
                        <li style={titleStyle}>
                            {todoTitle}
                            <button class="btn btn-outline-secondary btn-sm" onClick={() => markAsDone(todoId)}>Mark as Done</button>
                            <button class="btn btn-outline-danger btn-sm" onClick={() => remove(todoId)}> X</button>
                            <button class="btn btn-outline-secondary btn-sm" onClick={() => setIsEditMode(true)}>Edit</button>
                            <button class="btn btn-outline-secondary btn-sm" onClick={movedUpList}>Up</button>
                        </li>)
                    }</div>
            )}

        </div>
    );
}

export default TodoListItem;
