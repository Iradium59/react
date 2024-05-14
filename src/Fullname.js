import React, { useState } from 'react';

function Fullname() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Prénom"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="Nom de famille"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <p>
        Bonjour{' '}
        <strong>
          {firstName} {lastName.toUpperCase()}
        </strong>
      </p>
    </div>
  );
}

export default Fullname;
