import React from 'react';

function Contact({ contacts }) {
  return (
    <div>
      <h2>Liste des contacts</h2>
      {contacts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Aucun contact à afficher pour le moment.</p>
      )}
    </div>
  );
}

export default Contact;
