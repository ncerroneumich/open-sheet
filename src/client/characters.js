"use client";

import { useEffect, useState,  } from 'react';

export default function Characters() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    window.api.get_characters().then((c) => {
      setCharacters(c)
    })
  }, [])

  return (
    <div id="characters">
      {characters.map((c, i) => {
        return <p key={i}>
                 <b>Name: </b> {c.name}
                 <b> Class: </b> {c.classes[0].name}
                 <b> Race: </b> {c.race.subtype} {c.race.name}
               </p>
      })}
    </div>
  )
}
