

export default function Chip(props) {


  const styles = {background:props.background, color: props.color}

  return (
    <>
      <div style={styles} className="chip">
        <span>{props.value}</span>
      </div>
    </>
  )
}