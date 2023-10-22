import React from "react";
import ReactDOM from "react-dom/client";

// eslint-disable-next-line react-refresh/only-export-components
// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App | Chai</h1>
//     </div>
//   );
// }

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com/",
//     target: "_blank",
//   },
//   children: "Google.com",
// };

//Babels accptable format of an object to make a object-tree
// const anotherElement = (
//   <a href="https://google.com" rel="noreferrer" target="_blank">
//     Visit Google!
//   </a>
// );

const anotherUser = "Chai aur react!";

// modifying the the 'reactElement' object so that React accept
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit Google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
