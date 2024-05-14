import React from 'react';
import useBookList from './useBookList';

function Book() {
    const { books, addBook } = useBookList();

    return (
        <div>
            <h1>Liste des livres</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.title} - {book.author}</li>
                ))}
            </ul>
            <button onClick={() => addBook({ title: 'Nouveau livre', author: 'Auteur inconnu' })}>
                Ajouter un livre
            </button>
        </div>
    );
}

export default Book;
