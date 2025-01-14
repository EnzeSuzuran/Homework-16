import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/todoSlice';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            dispatch(addTodo({ id: Date.now(), text, completed: false }));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Добавить задачу"
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default AddTodo;
