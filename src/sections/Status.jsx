import { clsx } from "clsx"


export default function Status(props) {

  const classList = clsx(
    "status", props.status
  )

  return (
    <section className={classList}>
      <h2>{props.value}</h2>
      <p>{props.subvalue}</p>
    </section>
  )
}