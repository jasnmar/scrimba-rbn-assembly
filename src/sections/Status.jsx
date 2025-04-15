import { clsx } from "clsx"


export default function Status(props) {

  const classList = clsx(
    "status", props.status
  )

  return (
    <section aria-live="polite" aria-role="status" className={classList}>
      <h2>{props.value}</h2>
      <p>{props.subvalue}</p>
    </section>
  )
}