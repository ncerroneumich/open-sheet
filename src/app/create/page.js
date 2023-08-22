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
    const [custom_as_increase, setCustomASIncrease] = useState(false);
    const [as_type, setASType] = useState("standard-array")

    function handleTabClick(tab_num) {
        setSelectedTab(tab_num);
    }

    function BasicsContent() {
        function handleNameChange(event) {
            setName(event.target.value);
        }

        function handleCustomRacialIncreaseClick() {
            setCustomASIncrease(!custom_as_increase);
        }

        function handleAbilityScoreTypeChange(event) {
            setASType(event.target.value);
        }
        
        return (
            <>
                <span>Character Name: </span>
                <input value={name} onChange={handleNameChange} type="text"></input>
                <br></br>
                <span>Customize Racial Ability Score Increases</span>
                <input type="checkbox" checked={custom_as_increase} onClick={() => handleCustomRacialIncreaseClick()}></input>
                <br></br>
                <select onChange={(e) => handleAbilityScoreTypeChange(e)}>
                    <option value="standard-array">Standard Array</option>
                    <option value="point-buy">Point Buy</option>
                    <option value="custom">Custom</option>
                </select>
            </>
        );
    }

    function RaceContent() {

        function onRaceClick(event, i, race) {
            setSelectedRace({index: i, race: race});
        }

        if (!system_data) {
            return;
        }

        if (selected_race) {
            return (
                <div className="create-race">
                    <div className="race-list">
                        {system_data["races"].map((race, i) => {
                            if (selected_race["race"]["name"] === race["name"]) {
                                return (
                                    <b><div key={i} className="race-name" onClick={(e) => onRaceClick(e, i, race)}>{race["name"]} ({race["source"]})</div></b>
                                );
                            } else {
                                return (
                                    <div key={i} className="race-name" onClick={(e) => onRaceClick(e, i, race)}>{race["name"]} ({race["source"]})</div>
                                );
                            }
                            
                        })}
                    </div>
                    <div className="race-entries">
                        {selected_race["race"]["entries"].map((entry) => {
                            return (
                                <div className="race-entry">
                                    <h1>{entry.name}</h1>
                                    <p>{entry.entries[0]}</p>
                                </div>  
                            )
                        })}
                    </div>
                </div>
            );
        }

        return (
            <div className="create-race">
                <div className="race-list">
                    {system_data["races"].map((race, i) => {
                        return (
                            <div key={i} className="race-name" onClick={(e) => onRaceClick(e, i, race)}>{race["name"]} ({race["source"]})</div>
                        );
                    })}
                </div>
            </div>
        );
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
        function onBackgroundClick(event, i, bg) {
            setSelectedBackground({index: i, background: bg});
        }

        if (!system_data) {
            return;
        }

        if (selected_background) {
            return (
                <div className="create-background">
                    <div className="background-list">
                        {system_data["backgrounds"].map((bg, i) => {
                            if (selected_background["background"]["name"] === bg["name"]) {
                                return (
                                    <b><div key={i} className="background-name" onClick={(e) => onBackgroundClick(e, i, bg)}>{bg["name"]} ({bg["source"]})</div></b>
                                );
                            } else {
                                return (
                                    <div key={i} className="background-name" onClick={(e) => onBackgroundClick(e, i, bg)}>{bg["name"]} ({bg["source"]})</div>
                                );
                            }
                            
                        })}
                    </div>
                    <div className="background-entries">
                        {selected_background["background"]["entries"].map((entry) => {
                            if (entry["type"] === "entries") {
                                return (
                                    <div className="background-entry">
                                        <h1>{entry.name}</h1>
                                        <p>{entry.entries[0]}</p>
                                    </div>  
                                );
                            } else if (entry["type"] === "list")
                            return (
                                entry["items"].map(item => {
                                    return (
                                        <div className="background-entry">
                                            <b>{item.name}</b>
                                            <div>{item.entry}</div>
                                        </div>
                                    );
                                })
                            );
                        })}
                    </div>
                </div>
            );
        }

        return (
            <div className="create-background">
                <div className="background-list">
                    {system_data["backgrounds"].map((bg, i) => {
                        return (
                            <div key={i} className="background-name" onClick={(e) => onBackgroundClick(e, i, bg)}>{bg["name"]} ({bg["source"]})</div>
                        );
                    })}
                </div>
            </div>

        );
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
                            <button onClick={() => handleIncrease(ability)}>+</button>
                            <button onClick={() => handleDecrease(ability)}>-</button>
                            <span> {ability}: {score}{' '}</span>
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

    function handleDoneClick() {
        console.log("---Current Character---")
        console.log("name: ", name)
        console.log("race: ", selected_race)
        console.log("class: ", selected_class)
        console.log("background: ", selected_background)

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
                <button onClick={() => handleDoneClick()}>Done!</button>
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
