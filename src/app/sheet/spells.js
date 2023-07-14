import '@/style/app.css'

export default function Spells(props) {
  const { spells } = props;
  if (Object.keys(props).length > 0) {
    // Convert spell levels into integers.
    // Each index in the spell array
    // represents a level of spells.
    // [0,1,2,3,4,5,6,7,8,9]
    const spell_array = [[],[],[],[],[],[],[],[],[],[]];
    spells.forEach((s, i) => {
      let level;
      if (s.level === "Cantrip") {
        level = 0;
      } else {
        level = parseInt(s.level);
      }
      spells[i] = {
        ...spells[i],
        "level": level
      }
      spell_array[level].push(spells[i]);
    });

    // Format spells to be displayed
    const formatted_spells = spells.map((s,i) => {
      return (
        <div key={i}>
          <div className="spell-header">
            <h3 className="spell-name">{s.name}</h3>
            <div className="spell-details">
              <span className="spell-components"> {s.components}</span>
              <span className="spell-school"> {s.school}</span>
              <span className="spell-time"> {s.casting_time}</span>
              <span className="spell-range-area"> {s.range_area}</span>
            </div>
          </div>
          <div className="spell-description">
            <p>{s.description}</p>
          </div>
        </div>
      );
    });
    return (
      <>
        {formatted_spells}
      </>
    );
  }
}
