"use client";

export default function HP({max_health, current_health, temp_hp, bonus_max}) {
    return (
        <>
            <div class="hp-adjuster">
                <button class="hp-add">+</button>
                <form>
                    <input type="text"></input>
                </form>
                <button class="hp-sub">-</button>

            </div>
            <div class="hp-box">
                {current_health} / {max_health + bonus_max}
            </div>
        </>
        
    )
}
