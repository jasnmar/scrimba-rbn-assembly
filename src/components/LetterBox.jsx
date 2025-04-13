import { clsx } from "clsx"

export default function LetterBox(props) {
  console.log(props)
  const classNames = clsx(
    "letter", props.guessed ? "guessed" : "not-guessed"
  )
  return (
    <>
      <div data-letter={props.letter} className="letter"><span className={classNames}>{props.letter}</span></div>
    </>
  )
}