export default function SavingThrows() {
  return (
    <div className="saving-throw-box">
        <p className="st-text">Saving Throws</p>
        <div className="st-row">
            <div className="st-box" id="st-str">
                STR +[mod]
            </div>
            <div className="st-box" id="st-dex">
                DEX +[mod]
            </div>
            <div className="st-box" id="st-con">
                CON +[mod]
            </div>
        </div>
        <div className="st-row">
            <div className="st-box" id="st-int">
                INT +[mod]
            </div>
            <div className="st-box" id="st-wis">
                WIS +[mod]
            </div>
            <div className="st-box" id="st-cha">
                CHA +[mod]
            </div>
        </div>
    </div>
  )
}
