import Key from "../components/Key"


export default function Keyboard(props) {
  const lettersObjects = props.content
  const letterElements = lettersObjects.map((letter, index) => {
    return (
      <Key
        key={index}
        data-letter={letter.letter}
        letter={letter.letter}
        pressed={letter.pressed}
        correct={letter.correct}
        handler={props.handler}
      />
    )
  }
)
  return (
    <section className="keyboard">
      {/* {letters} */}
      {letterElements}
    </section>
  )
}