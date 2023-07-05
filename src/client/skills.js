import display_modifier from "@/scripts/display_modifier"
import "@/style/app.css"


export default function Skills(props) {
  const { skills } = props;
  if (Object.keys(props).length > 0) {
    return (
      <div className="skill-box">
          <p className="skill-text">Skills</p>
          <div className="skill" id="acrobatics">
              <div className={`proficiency-label-${skills.acrobatics.proficiency}`}></div>
              <p className="skill-name">Acrobatics</p>
              <p className="skill-as">DEX</p>
              <p className="skill-mod">{display_modifier(skills.acrobatics.value)}</p>
          </div>
          <div className="skill" id="animal-handling">
              <div className={`proficiency-label-${skills.animal_handling.proficiency}`}></div>
              <p className="skill-name">Animal Handling</p>
              <p className="skill-as">WIS</p>
              <p className="skill-mod">{display_modifier(skills.animal_handling.value)}</p>
          </div>
          <div className="skill" id="arcana">
              <div className={`proficiency-label-${skills.arcana.proficiency}`}></div>
              <p className="skill-name">Arcana</p>
              <p className="skill-as">INT</p>
              <p className="skill-mod">{display_modifier(skills.arcana.value)}</p>
          </div>
          <div className="skill" id="athletics">
              <div className={`proficiency-label-${skills.athletics.proficiency}`}></div>
              <p className="skill-name">Atheltics</p>
              <p className="skill-as">STR</p>
              <p className="skill-mod">{display_modifier(skills.athletics.value)}</p>
          </div>
          <div className="skill" id="deception">
              <div className={`proficiency-label-${skills.deception.proficiency}`}></div>
              <p className="skill-name">Deception</p>
              <p className="skill-as">WIS</p>
              <p className="skill-mod">{display_modifier(skills.deception.value)}</p>
          </div>
          <div className="skill" id="history">
              <div className={`proficiency-label-${skills.history.proficiency}`}></div>
              <p className="skill-name">History</p>
              <p className="skill-as">INT</p>
              <p className="skill-mod">{display_modifier(skills.history.value)}</p>
          </div>
          <div className="skill" id="insight">
              <div className={`proficiency-label-${skills.insight.proficiency}`}></div>
              <p className="skill-name">Insight</p>
              <p className="skill-as">WIS</p>
              <p className="skill-mod">{display_modifier(skills.insight.value)}</p>
          </div>
          <div className="skill" id="intimidation">
              <div className={`proficiency-label-${skills.intimidation.proficiency}`}></div>
              <p className="skill-name">Intimidation</p>
              <p className="skill-as">CHA</p>
              <p className="skill-mod">{display_modifier(skills.intimidation.value)}</p>
          </div>
          <div className="skill" id="investigation">
              <div className={`proficiency-label-${skills.investigation.proficiency}`}></div>
              <p className="skill-name">Investigation</p>
              <p className="skill-as">INT</p>
              <p className="skill-mod">{display_modifier(skills.investigation.value)}</p>
          </div>
          <div className="skill" id="medicine">
              <div className={`proficiency-label-${skills.medicine.proficiency}`}></div>
              <p className="skill-name">Medicine</p>
              <p className="skill-as">WIS</p>
              <p className="skill-mod">{display_modifier(skills.medicine.value)}</p>
          </div>
          <div className="skill" id="nature">
              <div className={`proficiency-label-${skills.nature.proficiency}`}></div>
              <p className="skill-name">Nature</p>
              <p className="skill-as">INT</p>
              <p className="skill-mod">{display_modifier(skills.nature.value)}</p>
          </div>
          <div className="skill" id="perception">
              <div className={`proficiency-label-${skills.perception.proficiency}`}></div>
              <p className="skill-name">Perception</p>
              <p className="skill-as">WIS</p>
              <p className="skill-mod">{display_modifier(skills.perception.value)}</p>
          </div>
          <div className="skill" id="persuasion">
              <div className={`proficiency-label-${skills.persuasion.proficiency}`}></div>
              <p className="skill-name">Persuasion</p>
              <p className="skill-as">CHA</p>
              <p className="skill-mod">{display_modifier(skills.persuasion.value)}</p>
          </div>
          <div className="skill" id="religion">
              <div className={`proficiency-label-${skills.religion.proficiency}`}></div>
              <p className="skill-name">Religion</p>
              <p className="skill-as">INT</p>
              <p className="skill-mod">{display_modifier(skills.religion.value)}</p>
          </div>
          <div className="skill" id="sleight-of-hand">
              <div className={`proficiency-label-${skills.sleight_of_hand.proficiency}`}></div>
              <p className="skill-name">Sleight of Hand</p>
              <p className="skill-as">DEX</p>
              <p className="skill-mod">{display_modifier(skills.sleight_of_hand.value)}</p>
          </div>
          <div className="skill" id="stealth">
              <div className={`proficiency-label-${skills.stealth.proficiency}`}></div>
              <p className="skill-name">Stealth</p>
              <p className="skill-as">DEX</p>
              <p className="skill-mod">{display_modifier(skills.stealth.value)}</p>
          </div>
          <div className="skill" id="survival">
              <div className={`proficiency-label-${skills.survival.proficiency}`}></div>
              <p className="skill-name">Survival</p>
              <p className="skill-as">WIS</p>
              <p className="skill-mod">{display_modifier(skills.survival.value)}</p>
          </div>
      </div>
    )
  }
}
