"use client";
import { useState } from 'react';


export default function HP({hit_points, set_hit_points}) {
    const [input_value, set_input_value] = useState();

    function handle_change(event) {
        const number = event.target.value.replace(/[^0-9]/g, '');
        set_input_value(number);
    }

    function handle_submit(event, modifier) {
        event.preventDefault();

        let current_hit_points = Math.min(hit_points.max, Math.max(0, hit_points.current + modifier * input_value));

        set_hit_points({
            ...hit_points,
            "current": current_hit_points,
        });
    }

    return (
        <>
            <div className="hp-adjuster">
                <form>
                    <button className="hp-add" onClick={(event) => { handle_submit(event, 1) }}>+</button>
                    <input className="hp-input" value={input_value} type="text" onChange={handle_change}></input>
                    <button className="hp-sub" onClick={(event) => { handle_submit(event, -1) }}>-</button>
                </form>
            </div>
            <div className="hp-box">
                {hit_points.current} / {hit_points.max}
            </div>
        </>
        
    )
}
