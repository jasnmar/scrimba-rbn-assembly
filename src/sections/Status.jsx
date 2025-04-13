

export default function Status(props) {
  return (
    <section className="status">
      <h2>{props.value}</h2>
      <p>{props.subvalue}</p>
    </section>
  )
}