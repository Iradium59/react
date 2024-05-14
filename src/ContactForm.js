import React, { useState } from 'react';

function ContactForm({ addContact }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addContact({ name, email, phone });
		setName('');
		setEmail('');
		setPhone('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Nom"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Téléphone"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
			/>
			<button type="submit">Ajouter</button>
		</form>
	);
}

export default ContactForm;
