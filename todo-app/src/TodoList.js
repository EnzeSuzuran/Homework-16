import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, setFilter } from './redux/todoSlice';

const TodoList = () => {
    const todos = useSelector(state => state.todos.items);
    const filter = useSelector(state => state.todos.filter);
    const dispatch = useDispatch();

    const filteredTodos = todos.filter(todo =>
        filter === 'all' || (filter === 'completed' ? todo.completed : !todo.completed)
    );

    return (
        <div>
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <span>{todo.text}</span>
                        <div>
                            <button onClick={() => dispatch(toggleTodo(todo.id))}>
                                {todo.completed ? 'Выполнено' : 'Не выполнено'}
                            </button>
                            <button onClick={() => dispatch(removeTodo(todo.id))}>Удалить</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="filter-buttons">
                <button onClick={() => dispatch(setFilter('all'))}>Все</button>
                <button onClick={() => dispatch(setFilter('completed'))}>Выполненные</button>
                <button onClick={() => dispatch(setFilter('uncompleted'))}>Невыполненные</button>
            </div>
        </div>
    );
};

export default TodoList;
