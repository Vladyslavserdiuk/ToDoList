import React, {useState} from 'react';


function TodoCreateForm(props) {

    const [inputValue, setInputValue] = useState(22);

    const onCreate = () => {
        props.create(inputValue)
        setInputValue('')
    }
    return (
        <div>
            TodoCreateForm
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button onClick={onCreate}>Create</button>
        </div>
    );
}

export default TodoCreateForm;
