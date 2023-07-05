import display_modifier from "@/scripts/display_modifier"


export default function Skills(props) {
  const { skills } = props;
  if (Object.keys(props).length > 0) {
    return (
      <div className="skill-box">
          <p className="skill-text">Skills</p>
          <div className="skill" id="acrobatics">
              <p className="skill-name">Acrobatics</p>
              <p className="skill-as">DEX</p>
              <p className="skill-mod">{display_modifier(skills.acrobatics.value)}</p>
          </div>
          <div className="skill" id="animal-handling">
              <p className="skill-name">Animal Handling</p>
              <p className="skill-as">WIS</p>
              <p className="skill-mod">{display_modifier(skills.animal_handling.value)}</p>
          </div>
          <div className="skill" id="arcana">
              <p className="skill-name">Arcana</p>
              <p className="skill-as">INT</p>
              <p className="skill-mod">{display_modifier(skills.arcana.value)}</p>
          </div>
          <div className="skill" id="athletics">
              <p className="skill-name">Atheltics</p>
              <p className="skill-as">STR</p>
              <p className="skill-mod">{display_modifier(skills.athletics.value)}</p>
          </div>
          <div className="skill" id="deception">
              <p className="skill-name">Deception</p>
              <p className="skill-as">WIS</p>
              <p className="skill-mod">{display_modifier(skills.deception.value)}</p>
          </div>
          <div className="skill" id="history">
              <p className="skill-name">History</p>
              <p className="skill-as">INT</p>
              <p className="skill-mod">{display_modifier(skills.history.value)}</p>
          </div>
          <div className="skill" id="insight">
              <p className="skill-name">Insight</p>
              <p className="skill-as">WIS</p>
              <p className="skill-mod">{display_modifier(skills.insight.value)}</p>
          </div>
          <div className="skill" id="intimidation">
              <p className="skill-name">Intimidation</p>
              <p className="skill-as">CHA</p>
              <p className="skill-mod">{display_modifier(skills.intimidation.value)}</p>
          </div>
          <div className="skill" id="investigation">
              <p className="skill-name">Investigation</p>
              <p className="skill-as">INT</p>
              <p className="skill-mod">{display_modifier(skills.investigation.value)}</p>
          </div>
          <div className="skill" id="medicine">
              <p className="skill-name">Medicine</p>
              <p className="skill-as">WIS</p>
              <p className="skill-mod">{display_modifier(skills.medicine.value)}</p>
          </div>
          <div className="skill" id="nature">
              <p className="skill-name">Nature</p>
              <p className="skill-as">INT</p>
              <p className="skill-mod">{display_modifier(skills.nature.value)}</p>
          </div>
          <div className="skill" id="perception">
              <p className="skill-name">Perception</p>
              <p className="skill-as">WIS</p>
              <p className="skill-mod">{display_modifier(skills.perception.value)}</p>
          </div>
          <div className="skill" id="persuasion">
          <p className="skill-name">Persuasion</p>
              <p className="skill-as">CHA</p>
              <p className="skill-mod">{display_modifier(skills.persuasion.value)}</p>
          </div>
          <div className="skill" id="religion">
              <p className="skill-name">Religion</p>
              <p className="skill-as">INT</p>
              <p className="skill-mod">{display_modifier(skills.religion.value)}</p>
          </div>
          <div className="skill" id="sleight-of-hand">
              <p className="skill-name">Sleight of Hand</p>
              <p className="skill-as">DEX</p>
              <p className="skill-mod">{display_modifier(skills.sleight_of_hand.value)}</p>
          </div>
          <div className="skill" id="stealth">
              <p className="skill-name">Stealth</p>
              <p className="skill-as">DEX</p>
              <p className="skill-mod">{display_modifier(skills.stealth.value)}</p>
          </div>
          <div className="skill" id="survival">
              <p className="skill-name">Survival</p>
              <p className="skill-as">WIS</p>
              <p className="skill-mod">{display_modifier(skills.survival.value)}</p>
          </div>
      </div>
    )
  }
}
