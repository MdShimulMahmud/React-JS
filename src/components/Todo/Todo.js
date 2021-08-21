import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Todo = () => {
    const [todo, setTodo] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const id = useParams();
    console.log(id);
    console.log(todo);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setTodo(data));
        return () => {};
    }, []);
    return (
        <div>
            <h2>This is todo</h2>
            <p>
                {todo.map((single) => (
                    <li>{single.title}</li>
                ))}
            </p>
        </div>
    );
};

export default Todo;
