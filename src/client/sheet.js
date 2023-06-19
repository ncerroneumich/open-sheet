"use client";

import Header from "@/client/header"
import SavingThrows from "@/client/saving_throws"
import Skills from "@/client/skills"
import Panel from "@/client/panel"
import Characters from "@/client/characters"

import { useEffect, useState,  } from 'react';

export default function Sheet() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    window.api.get_characters().then((c) => {
      setCharacters(c);
    })
  }, []);

  const character = characters[0];
  console.log(character)

  // Unconditional props

  const header_props = {
    "name": character.name,
    "race": character.race.name,
    "classes": character.classes.map((c) => { 
      return {
        "name": c.name,
        "level": c.level
      }
    }),
    "background": character.background.name,
    "alignment": character.alignment,
    "size": character.race.size,
    "xp": character.xp,
    "ability_scores": character.ability_scores,
    "speeds": character.speed,
    "hit_points": character.hit_points
  };

  // Conditional props

  return (
    <>
      <Header></Header>
      <SavingThrows></SavingThrows>
      <Skills></Skills>
      <Panel></Panel>
      {/* {characters.map((c, i) => {
        return <p key={i}>
                 <b>Name: </b> {c.name}
                 <b> Class: </b> {c.classes[0].name}
                 <b> Race: </b> {c.race.subtype} {c.race.name}
               </p>
      })} */}
    </>
  );
}