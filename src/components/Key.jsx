import { clsx } from "clsx"

export default function Key(props) {
  // console.log('props: ', props)
  const classNames = clsx(
    "key", props.pressed ? props.correct ? "correct" : "incorrect" : "unpressed"
  )
  return (
    <>
      <button data-letter={props.letter} onClick={props.handler} className={classNames}>{props.letter}</button>
    </>
  )
}