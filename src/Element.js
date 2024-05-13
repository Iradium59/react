import React, { useState } from 'react';

const Element = () => {
    const [elements, setElements] = useState([]);
    const [newElement, setNewElement] = useState('');

    const handleInputChange = (e) => {
        setNewElement(e.target.value);
    };
    const addElement = () => {
        if (newElement.trim() !== '') {
            setElements([...elements, newElement]);
            setNewElement('');
        }
    };

    return (
        <>
            <h1>My List</h1>*
            <input 
                type="text" 
                value={newElement} 
                onChange={handleInputChange} 
                placeholder="Enter new element" 
            />*
            <button onClick={addElement}>Add Element</button>
            <hr />
            <ul>*
                {elements.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
        </>
    );
}

export default Element;
