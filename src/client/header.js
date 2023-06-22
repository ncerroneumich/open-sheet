import HP from "@/client/hp"
import '@/style/app.css'

export default function Header(props) {
    if (props) {
        console.log(props);
    }
    return (
        <div className="sheet-header">
            <img className="character-sheet-portrait" src="https://i.pinimg.com/originals/1b/2b/21/1b2b215cad3448912075b9b2852db6fe.jpg"></img>
            <div className="character-sheet-header-group">
                <div className="character-sheet-header-details">
                    <p className="character-sheet-header-name">Character Name</p>
                    <p className="character-sheet-header-description">Race Class(s) Background Alignment Size</p>
                </div>
                <div className="character-sheet-header-level-details">
                    <p>Level [level]</p>
                    <p>[xp] XP</p>
                    <p>Proficiency +[pb]</p>
                </div>
                <div className="character-sheet-header-ability-scores">
                    <div className="as-box" id="as-str">
                        <p>Strength</p>
                        <p>+[mod]</p>
                        <p>[score]</p>
                    </div>
                    <div className="as-box" id="as-dex">
                        <p>Dexterity</p>
                        <p>+[mod]</p>
                        <p>[score]</p>
                    </div>
                    <div className="as-box" id="as-con">
                        <p>Constitution</p>
                        <p>+[mod]</p>
                        <p>[score]</p>
                    </div>
                    <div className="as-box" id="as-int">
                        <p>Inteligence</p>
                        <p>+[mod]</p>
                        <p>[score]</p>
                    </div>
                    <div className="as-box" id="as-wis">
                        <p>Wisdom</p>
                        <p>+[mod]</p>
                        <p>[score]</p>
                    </div>
                    <div className="as-box" id="as-cha">
                        <p>Charisma</p>
                        <p>+[mod]</p>
                        <p>[score]</p>
                    </div>
                </div>
            </div>
            <div className="character-sheet-header-stack">
                <div className="vertical-box" id="armor-class">
                    [ac]
                </div>
                <div className="vertical-box" id="speed">
                    [speed]
                </div>
                <div className="vertical-box" id="initiative">
                    [ini]
                </div>
            </div>
            <div className="character-sheet-header-hp">
                <HP max_health={10} current_health={10} temp_hp={0} bonus_max={0}></HP>
                <button className="short-rest">Short Rest</button>
                <button className="long-rest">Long Rest</button>
            </div>
        </div>
    );
}
