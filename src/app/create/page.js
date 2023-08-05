"use client";

import '@/style/app.css'
import { useEffect, useState } from 'react';

export default function Create() {
    const [selected_tab, setSelectedTab] = useState(1);
    const [name, setName] = useState("");
    const [system_data, setSystemData] = useState();
    const [ability_scores, setAbilityScores] = useState({
        Strength: 8,
        Dexterity: 8,
        Constitution: 8,
        Intelligence: 8,
        Wisdom: 8,
        Charisma: 8,
    });
    const [selected_race, setSelectedRace] = useState();
    const [selected_class, setSelectedClass] = useState();
    const [selected_background, setSelectedBackground] = useState();

    function handleTabClick(tab_num) {
        setSelectedTab(tab_num);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function BasicsContent() {
        return (
            <>
                <span>Character Name: </span>
                <input value={name} onChange={handleNameChange} type="text"></input>
            </>
        );
    }

    function RaceContent() {
        if (system_data) {
            return (
                <div>
                    {selected_race && <h1>Selected race: {selected_race["race"]["name"]}</h1>}
                    {system_data["races"].map((race, i) => {
                        return (
                            <div key={i} onClick={(event) => setSelectedRace({index: i, race: race})}>{race["name"]} ({race["source"]})</div>
                        );
                    })}
                </div>
            );
            
        }
    }

    function ClassContent() {
        if (system_data) {
            return (
                <div>
                    {selected_class && <h1>Selected class: {selected_class["class"]["class"][0]["name"]}</h1>}
                    {system_data["classes"].map((cls, i) => {
                        return (
                            <div key={i} onClick={(event) => setSelectedClass({index: i, class: cls})}>{cls["class"][0]["name"]}</div>
                        );
                    })}
                </div>
            );
        }
    }

    function BackgroundContent() {
        if (system_data) {
            return (
                <div>
                    {selected_background && <h1>Selected background: {selected_background["background"]["name"]}</h1>}
                    {system_data["backgrounds"].map((bg, i) => {
                        return (
                            <div key={i} onClick={(event) => setSelectedBackground({index: i, background: bg})}>{bg["name"]} ({bg["source"]})</div>
                        );
                    })}
                </div>
            );
        }
    }

    function ASContent() {
        function calculateTotalPoints() {
            let total = 0;
            Object.values(ability_scores).forEach(score => {
                if (score <= 13) {
                    total += score - 8;
                } else {
                    // points required to go from 8 -> 13
                    total += 5;
                    // remaining points that cost double
                    total += (score - 13) * 2;
                }
            })
            return total;
        };
        
        function handleIncrease (ability) {
            let increase_cost = 1;
            if (ability_scores[ability] + 1 > 13) {
                increase_cost = 2;
            }

            if (calculateTotalPoints() + increase_cost <= 27 && ability_scores[ability] < 15) {
                const updatedScores = { ...ability_scores };
                updatedScores[ability] += 1;
                setAbilityScores(updatedScores);
            }
        };
        
        function handleDecrease (ability) {
            if (ability_scores[ability] > 8) {
                const updatedScores = { ...ability_scores };
                updatedScores[ability] -= 1;
                setAbilityScores(updatedScores);
            }
        };

        function handleASReset() {
            setAbilityScores({
                Strength: 8,
                Dexterity: 8,
                Constitution: 8,
                Intelligence: 8,
                Wisdom: 8,
                Charisma: 8
            });
        }
        
        return (
        <div>
            <h2>Point Buy</h2>
            <p>Total Points Remaining: {27 - calculateTotalPoints()}</p>
            <ul>
                {Object.entries(ability_scores).map(([ability, score]) => (
                    <li key={ability} class="ability-score-list">
                        <span>{ability}: {score}{' '}</span>
                        <button onClick={() => handleIncrease(ability)}>+</button>
                        <button onClick={() => handleDecrease(ability)}>-</button>
                    </li>
                ))} 
            </ul>
            <button onClick={() => handleASReset()}>Reset Ablity Scores</button>
        </div>
        );
    }

    function EquipmentContent() {
        return (
            <p>Equipment Page</p>
        );
    }

    function BioContent() {
        return (
            <p>Bio Page</p>
        );
    }

    // Fetch DnD data
    useEffect(() => {
        window.api.get_data().then(data => {
            setSystemData(data);
        });
    }, []);

    return (
        <div className="create-panel">
            <nav className="panel-nav">
                <button className='create-panel-button' href='#menu' onClick={() => handleTabClick(1)}>Basics</button>
                <button className='create-panel-button' href='#race' onClick={() => handleTabClick(2)}>Race</button>
                <button className='create-panel-button' href='#class' onClick={() => handleTabClick(3)}>Class</button>
                <button className='create-panel-button' href='#background' onClick={() => handleTabClick(4)}>Background</button>
                <button className='create-panel-button' href='#as' onClick={() => handleTabClick(5)}>Ability Scores</button>
                <button className='create-panel-button' href='#equipment' onClick={() => handleTabClick(6)}>Equipment</button>
                <button className='create-panel-button' href='#bio' onClick={() => handleTabClick(7)}>Bio</button>
                <button>Done!</button>
            </nav>
            <div className="panel-content">
                {selected_tab === 1 && BasicsContent()}
                {selected_tab === 2 && RaceContent()}
                {selected_tab === 3 && ClassContent()}
                {selected_tab === 4 && BackgroundContent()}
                {selected_tab === 5 && ASContent()}
                {selected_tab === 6 && EquipmentContent()}
                {selected_tab === 7 && BioContent()}
            </div>
        </div>
    );
}
