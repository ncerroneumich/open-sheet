"use client";
import Spells from "@/app/sheet/spells"

import '@/style/app.css'
import { useState } from 'react';

export default function Panel(props) {
    const { spells } = props;
    const [selected_tab, setSelectedTab] = useState(1);

    function handleTabClick(tab_num) {
        setSelectedTab(tab_num);
    }

    function MainContent() {
        return (
            <p>Main Page</p>
        );
    }

    function SpellsContent() {
        return (
            <Spells spells={spells}></Spells>
        );
    }

    function InventoryContent() {
        return (
            <p>Inventory Page</p>
        );
    }

    function FeaturesContent() {
        return (
            <p>Features Page</p>
        );
    }

    function BioContent() {
        return (
            <p>Bio Page</p>
        );
    }

    function NotesContent() {
        return (
            <p>Notes Page</p>
        );
    }

    return (
        <div className="sheet-panel">
            <nav className="panel-nav">
                <a href='#menu' onClick={() => handleTabClick(1)}>Main | </a>
                <a href='#spells' onClick={() => handleTabClick(2)}>Spells | </a>
                <a href='#inventory' onClick={() => handleTabClick(3)}>Inventory | </a>
                <a href='#features' onClick={() => handleTabClick(4)}>Features | </a>
                <a href='#bio' onClick={() => handleTabClick(5)}>Bio | </a>
                <a href='#notes' onClick={() => handleTabClick(6)}>Notes</a>
            </nav>
            <div className="panel-content">
                {selected_tab === 1 && <MainContent></MainContent>}
                {selected_tab === 2 && <SpellsContent></SpellsContent>}
                {selected_tab === 3 && <InventoryContent></InventoryContent>}
                {selected_tab === 4 && <FeaturesContent></FeaturesContent>}
                {selected_tab === 5 && <BioContent></BioContent>}
                {selected_tab === 6 && <NotesContent></NotesContent>}
            </div>
        </div>
    );
}
