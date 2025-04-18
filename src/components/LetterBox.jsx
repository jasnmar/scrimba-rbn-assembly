import { clsx } from "clsx"

export default function LetterBox(props) {
  const classNames = clsx(
    "letter", 
    props.lost && !props.guessed ? "lost" : null,
    props.guessed ? "guessed" : "not-guessed"
  )
  return (
    <>
      <div data-letter={props.letter} className="letter"><span className={classNames}>{props.letter}</span></div>
    </>
  )
}