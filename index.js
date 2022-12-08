// let divRoot = document.getElementById("root");

// let pEl = document.createElement("p");
// pEl.id = "header";
// pEl.innerHTML = `Hello React!`;
// divRoot.appendChild(pEl);
// console.log(pEl);

function MainContent() {
  return (
    <div className="main">
      <h1 id="h1">I am learning react</h1>
    </div>
  );
}

ReactDOM.render(<MainContent />, document.getElementById("root"));

const element = <h1 className="header">This is JSX</h1>;
console.log(element);
ReactDOM.render(element, document.getElementById("root"));
