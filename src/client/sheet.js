"use client";

import Header from "@/client/header"
import SavingThrows from "@/client/saving_throws"
import Skills from "@/client/skills"
import Panel from "@/client/panel"

import { useEffect, useState,  } from 'react';

function as_mod(as) {
  return Math.floor((as - 10) / 2);
}

export default function Sheet() {
  const [character, set_character] = useState();
  // Dependent state
  const [ability_modifiers, set_modifiers] = useState({
    "str": 0,
    "dex": 0,
    "con": 0,
    "int": 0,
    "wis": 0,
    "cha": 0,
  });
  const [level, set_level] = useState(0);
  const [proficiency_bonus, set_pb] = useState();
  const [saving_throws, set_saving_throws] = useState({
    "str": {"value": 0, proficient: false},
    "dex": {"value": 0, proficient: false},
    "con": {"value": 0, proficient: false},
    "int": {"value": 0, proficient: false},
    "wis": {"value": 0, proficient: false},
    "cha": {"value": 0, proficient: false},
  });


  // Set the character upon initial rendering
  useEffect(() => {
    window.api.get_characters().then((c) => {
      set_character(c[0]);
    });
  }, []);

  // Determine info dependent on character's data
  useEffect(() => {
    if (character) {
      // Ability Modifiers
      set_modifiers({
        "str": as_mod(character.ability_scores.str),
        "dex": as_mod(character.ability_scores.dex),
        "con": as_mod(character.ability_scores.con),
        "int": as_mod(character.ability_scores.int),
        "wis": as_mod(character.ability_scores.wis),
        "cha": as_mod(character.ability_scores.cha),
      });

      // Level
      let temp_level = 0;
      character.classes.map((c) => {
        temp_level = temp_level + 1;
      });
      set_level(temp_level);

      // Proficiency Bonus
      let temp_pb;
      if (temp_level < 5) {
        temp_pb = 2;
        set_pb(2);
      } else if (temp_level < 9) {
        temp_pb = 3;
        set_pb(3);
      } else if (temp_level < 13) {
        temp_pb = 4;
        set_pb(4);
      } else if (temp_level < 17) {
        temp_pb = 5;
        set_pb(5);
      } else {
        temp_pb = 6;
        set_pb(6);
      }

      // Saving Throws
      for (const [key, value] of Object.entries(character.saving_throws)) {
        if (value === true) {
          set_saving_throws({
            ...saving_throws,
            key: {
                  "value": (character.ability_scores[key] + temp_pb),
                  "proficient": true
                 }
          })
        }
      }
    }
  }, [character]);

  // Full Render
  if (character) {
    return (
      <>
        <Header 
          name={character.name} 
          race={character.race} 
          classes={character.classes} 
          background={character.background} 
          alignment={character.alignment} 
          xp={character.xp} 
          ability_scores={character.ability_scores} 
          speed={character.speed} 
          hit_points={character.hit_points}
          ability_modifiers={ability_modifiers}
          level={level}
          proficiency_bonus={proficiency_bonus}
          saving_throws={saving_throws}>
        </Header>
        <SavingThrows 
          profs={character.saving_throws} 
          ability_scores={character.ability_scores}>
        </SavingThrows>
      </>
    );
  }

  // Blank render
  return (
    <>
      <Header></Header>
      <SavingThrows></SavingThrows>
      <Skills></Skills>
      <Panel></Panel>
    </>
  );
}