import { useState, useEffect, useCallback } from 'react';

function useBookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/livres')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    const addBook = useCallback((book) => {
        fetch('http://localhost:3001/ajout-livre', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        })
        .then(response => response.json())
        .then(data => {
            setBooks(prevBooks => [...prevBooks, data.livre]);
        })
        .catch(error => console.error('Error adding book:', error));
    }, []);

    return { books, addBook };
}

export default useBookList;
