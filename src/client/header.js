import HP from "@/client/hp"


export default function Header() {
    return (
        <>
            <img class="character-sheet-portrait" src="https://i.pinimg.com/originals/1b/2b/21/1b2b215cad3448912075b9b2852db6fe.jpg" height="200px"></img>
            <div class="character-sheet-header-details">
                <h1 class="character-sheet-header-name">Character Name</h1>
                <h2 class="character-sheet-header-description">Race Class(s) Background Alignment Size</h2>
            </div>
            <div class="character-sheet-header-level-details">
                <p>Level [level]</p>
                <p>[xp] XP</p>
                <p>Proficiency +[pb]</p>
            </div>
            <div class="character-sheet-header-ability-scores">
                <div class="as-box" id="as-str">
                    <p>Strength</p>
                    <p>+[mod]</p>
                    <p>[score]</p>
                </div>
                <div class="as-box" id="as-dex">
                    <p>Dexterity</p>
                    <p>+[mod]</p>
                    <p>[score]</p>
                </div>
                <div class="as-box" id="as-con">
                    <p>Constitution</p>
                    <p>+[mod]</p>
                    <p>[score]</p>
                </div>
                <div class="as-box" id="as-int">
                    <p>Inteligence</p>
                    <p>+[mod]</p>
                    <p>[score]</p>
                </div>
                <div class="as-box" id="as-wis">
                    <p>Wisdom</p>
                    <p>+[mod]</p>
                    <p>[score]</p>
                </div>
                <div class="as-box" id="as-cha">
                    <p>Charisma</p>
                    <p>+[mod]</p>
                    <p>[score]</p>
                </div>
            </div>
            <div class="character-sheet-header-stack">
                <div class="armor-class">
                    [ac]
                </div>
                <div class="speed">
                    [speed]
                </div>
                <div class="initiative">
                    [ini]
                </div>
            </div>
            <div class="character-sheet-header-hp">
                <HP max_health={10} current_health={10} temp_hp={0} bonus_max={0}></HP>
                <button class="short-rest">Short Rest</button>
                <button class="long-rest">Long Rest</button>
            </div>
        </>
    );
}