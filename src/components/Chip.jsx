import { clsx } from "clsx"


export default function Chip(props) {
  const styles = {background:props.background, color: props.color}

  const classNames = clsx(
    "chip", props.wrong ? "lost" : null
  )
  return (
    <>
      <div style={styles} className={classNames}>
          {props.value}
      </div>
    </>
  )
}