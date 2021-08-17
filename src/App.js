import React, { useEffect, useState } from 'react';

function App() {
    const products = [
        { name: 'Iphone', price: '$499.99' },
        { name: 'Samsung', price: '$399.99' },
        { name: 'Oppo', price: '$99.99' },
        { name: 'Realme', price: '$199.99' },
    ];

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data));

        return () => {};
    }, [users]);
    return (
        <>
            {' '}
            <div>
                <ul>
                    {products.map((product) => (
                        <li>
                            <h2>
                                {product.name} - {product.price}
                            </h2>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <p>
                    {users.map((user) => (
                        <li>{user.name}</li>
                    ))}
                </p>
            </div>
        </>
    );
}
export default App;
