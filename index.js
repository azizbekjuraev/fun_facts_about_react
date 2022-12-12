function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" width={"60px"} />
        </nav>
      </header>
      <h1>Why I like React?</h1>
      <ol>
        <li>Its fast</li>
        <li>Its Maintained by Facebook</li>
        <li>It runs many apps in the world</li>
        <li>User friendly</li>
      </ol>
      <footer>
        <small>©️ 2022 JURAEV development. All rights reserved</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
