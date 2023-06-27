export default function SavingThrows(props) {
  const { saving_throws } = props;

  if (Object.keys(props).length > 0) {
    return (
      <div className="saving-throw-box">
        <p className="st-text">Saving Throws</p>
        <div className="st-row">
          <div className="st-box" id="st-str">
            STR {saving_throws.str.value}
          </div>
          <div className="st-box" id="st-dex">
            DEX {saving_throws.dex.value}
          </div>
          <div className="st-box" id="st-con">
            CON {saving_throws.con.value}
          </div>
        </div>
        <div className="st-row">
          <div className="st-box" id="st-int">
            INT {saving_throws.int.value}
          </div>
          <div className="st-box" id="st-wis">
            WIS {saving_throws.wis.value}
          </div>
          <div className="st-box" id="st-cha">
            CHA {saving_throws.cha.value}
          </div>
        </div>
      </div>
    )
  }
}
