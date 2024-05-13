import React from 'react';
import './App.css';

const Line = ({ person, index }) => {
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{person.firstname}</td>
            <td>{person.lastname}</td>
        </tr>
    )
}

const renderArray = (persons) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                </tr>
            </thead>
            <tbody>
                {persons.map((person, index) => <Line person={person} index={index} key={index} />)}
            </tbody>
        </table>
    )
}

const Persons = () => {
    const persons = [
        { firstname: 'Alice', lastname: "DUPONT" },
        { firstname: 'Maria', lastname: "DUPONT" },
        { firstname: 'Chloé', lastname: "DUPONT" },
        { firstname: 'Sylvia', lastname: "Martez" },
    ];

    return (
        <>
            <h1>My Persons</h1>
            <hr />
            {renderArray(persons)}
        </>
    );
}

export default Persons;
