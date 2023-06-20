"use client";

export default function HP({max_health, current_health, temp_hp, bonus_max}) {
    return (
        <>
            <div className="hp-adjuster">
                <button className="hp-add">+</button>
                <form>
                    <input type="text"></input>
                </form>
                <button className="hp-sub">-</button>

            </div>
            <div className="hp-box">
                {current_health} / {max_health + bonus_max}
            </div>
        </>
        
    )
}
