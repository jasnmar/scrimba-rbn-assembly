import Chip from "../components/Chip"



export default function Chips(props) {
  const missedLetters = props.missed
  
  const chipList = props.languages.map((language, index) => {
    return <Chip key={index} wrong={index < missedLetters ? true : false} value={language.name} color={language.color} background={language.backgroundColor} />
  })

  return (
    <section>
      <div className="chip-container">
        {chipList}
      </div>
    </section>
  )
}