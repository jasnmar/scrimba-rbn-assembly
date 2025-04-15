import LetterBox from "../components/LetterBox"

export default function Guess(props) {
  const lettersObj = props.content.map((letterObj, index) => {
    return (
      <LetterBox
        key={index}
        data-letter={letterObj.letter}
        guessed={letterObj.guessed}
        letter={letterObj.letter}
      />
    )
  })
  return <section className="word">{lettersObj}</section>
}
