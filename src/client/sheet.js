"use client";

import Header from "@/client/header"
import SavingThrows from "@/client/saving_throws"
import Skills from "@/client/skills"
import Panel from "@/client/panel"

import { useEffect, useState,  } from 'react';

export default function Sheet() {
  const [character, setCharacter] = useState(null);
  const [name, setName] = useState();
  const [race, setRace] = useState({});
  const [classes, setClasses] = useState([]);
  const [background, setBackground] = useState();
  const [alignment, setAlignment] = useState();
  const [xp, setXp] = useState();
  const [ability_scores, setAbilityScores] = useState();
  const [speed, setSpeed] = useState();
  const [hit_points, setHitPoints] = useState();

  // Set the character upon initial rendering,
  // then set the rest of the characteristics
  // once the character is set

  useEffect(() => {
    window.api.get_characters().then((c) => {
      setCharacter(c[0]);
    });
  }, []);

  useEffect(() => {
    // Don't try and update during the initial render
    if (character) {
      setName(character.name);
      setRace(character.race);
      setClasses(character.classes);
      setBackground(character.background);
      setAlignment(character.alignment);
      setXp(character.xp);
      setAbilityScores(character.ability_scores);
      setSpeed(character.speed);
      setHitPoints(character.hit_points);
    }
  }, [character]);

  if (name && race && classes && background && alignment && xp && ability_scores && speed && hit_points) {
    return (
      <>
        <Header> props={{name, race, classes, background, alignment, xp, ability_scores, speed, hit_points}} </Header>
        <SavingThrows></SavingThrows>
        <Skills></Skills>
        <Panel></Panel>
      </>
    )
  }

  return (
    <>
      <Header></Header>
      <SavingThrows></SavingThrows>
      <Skills></Skills>
      <Panel></Panel>
    </>
  );
}