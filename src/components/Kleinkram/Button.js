export default function Button(props) {
  console.log("Button, idx:", props.index);
  return (
    <button
      className={`${props.className}`}
      key={props.index}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
