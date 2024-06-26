import HP from "@/app/sheet/hp"
import '@/style/app.css'
import display_modifier from "@/scripts/display_modifier"
export default function Header(props) {
    const { name, race, classes, background, alignment, xp, ability_scores, speed, hit_points, set_hit_points, ability_modifiers, level, proficiency_bonus, saving_throws } = props;
    let class_text = [];

    // Concatonate the text for the classes
    if (classes) {
        classes.map((c) => {
            if (c.subtype) {
                class_text.push(c.subtype);
            }
            class_text.push(c.name);
            class_text.push(c.level);
        });
    }

    if (Object.keys(props).length > 0) {
        return (
            <div className="sheet-header">
                <img className="character-sheet-portrait" src="https://i.pinimg.com/originals/1b/2b/21/1b2b215cad3448912075b9b2852db6fe.jpg"></img>
                <div className="character-sheet-header-group">
                    <div className="character-sheet-header-details">
                        <p className="character-sheet-header-name">{name}</p>
                        <p className="character-sheet-header-description">{(race ? race.name : "")} | {class_text.join(' ')} | {background ? background.name : ""} | {alignment}</p>
                    </div>
                    <div className="character-sheet-header-level-details">
                        <p>Level {level}</p>
                        <p>{xp} XP</p>
                        <p>Proficiency {display_modifier(proficiency_bonus)}</p>
                    </div>
                    <div className="character-sheet-header-ability-scores">
                        <div className="as-box" id="as-str">
                            <p>Strength</p>
                            <p>{display_modifier(ability_modifiers.str)}</p>
                            <p>{ability_scores.str}</p>
                        </div>
                        <div className="as-box" id="as-dex">
                            <p>Dexterity</p>
                            <p>{display_modifier(ability_modifiers.dex)}</p>
                            <p>{ability_scores.dex}</p>
                        </div>
                        <div className="as-box" id="as-con">
                            <p>Constitution</p>
                            <p>{display_modifier(ability_modifiers.con)}</p>
                            <p>{ability_scores.con}</p>
                        </div>
                        <div className="as-box" id="as-int">
                            <p>Inteligence</p>
                            <p>{display_modifier(ability_modifiers.int)}</p>
                            <p>{ability_scores.int}</p>
                        </div>
                        <div className="as-box" id="as-wis">
                            <p>Wisdom</p>
                            <p>{display_modifier(ability_modifiers.wis)}</p>
                            <p>{ability_scores.wis}</p>
                        </div>
                        <div className="as-box" id="as-cha">
                            <p>Charisma</p>
                            <p>{display_modifier(ability_modifiers.cha)}</p>
                            <p>{ability_scores.cha}</p>
                        </div>
                    </div>
                </div>
                <div className="character-sheet-header-stack">
                    <div className="vertical-box" id="armor-class">
                        <div>Armor Class</div>
                        {10 + ability_modifiers.dex} (unarmored)
                    </div>
                    <div className="vertical-box" id="speed">
                        <div>Speed</div>
                        {speed.Walk} walk
                    </div>
                    <div className="vertical-box" id="initiative">
                        <div>Initiative</div>
                        {display_modifier(ability_modifiers.dex)}
                    </div>
                </div>
                <div className="character-sheet-header-hp">
                    <HP 
                        hit_points={hit_points}
                        set_hit_points={set_hit_points}>
                    </HP>
                    <button className="short-rest">Short Rest</button>
                    <button className="long-rest">Long Rest</button>
                </div>
            </div>
        );
    }

    
}
