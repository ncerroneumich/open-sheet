"use client";

import '@/style/app.css'
import { useState } from 'react';

export default function Create() {
    const [selected_tab, setSelectedTab] = useState(1);
    const [name, setName] = useState("")

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
        return (
            <p>Race Page</p>
        );
    }

    function ClassContent() {
        return (
            <p>Class Page</p>
        );
    }

    function BackgroundContent() {
        return (
            <p>Background Page</p>
        );
    }

    function ASContent() {
        return (
            <p>Ability Scores Page</p>
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
