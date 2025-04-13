import Chip from "../components/Chip"
import { languages } from "../languages"


export default function Chips() {

  const chipList = languages.map((language, index) => {
    return <Chip key={index} value={language.name} color={language.color} background={language.backgroundColor} />
  })

  return (
    <section>
      <div className="chip-container">
        {chipList}
      </div>
    </section>
  )
}