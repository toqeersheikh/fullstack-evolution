export default function TabButton(props) {
  console.log("TabButton Component is rendering");
  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}
