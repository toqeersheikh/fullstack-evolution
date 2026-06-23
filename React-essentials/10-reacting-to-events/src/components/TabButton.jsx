export default function TabButton(props) {
  function clickHandler() {
    console.log("Button Clicked");
  }
  return (
    <li>
      <button onClick={clickHandler}>{props.children}</button>
    </li>
  );
}

// Using Label Attribute
// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.label}</button>
//     </li>
//   );
// }
