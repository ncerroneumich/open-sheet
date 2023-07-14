"use client";

import { useEffect, useState,  } from 'react';
import { useRouter } from 'next/navigation';
import { Link } from 'next/link';

export default function Start() {
	const [characters, setCharacters] = useState();
	const [selected_character, setSelected] = useState("");
	const router = useRouter();
	
	// Fetch all characters
	useEffect(() => {
		window.api.get_characters().then((c) => {
				setCharacters(c);
		});
  	}, []);

	function handleSelectionChange(event) {
		setSelected(JSON.parse(event.target.value));
	}

	function handleRouting(route) {
		router.push(route);
	}

	if (characters) {
		return (
			<>
				<p>Current selected: {selected_character.name}</p>
				<select onChange={handleSelectionChange}>
					<option value="">-- Select a character --</option>
					{characters.map((c,i) => {
						return <option key={i} value={JSON.stringify(c)} >{c.name}</option>
					})}
				</select>
				<br></br>
				<button onClick={() => handleRouting("sheet")}>View Character</button>
				<br></br>
      			<button onClick={() => handleRouting("create")}>Create New Character</button>
			</>
		);
	}
}