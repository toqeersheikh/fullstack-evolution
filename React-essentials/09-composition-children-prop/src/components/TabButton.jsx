export default function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
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
