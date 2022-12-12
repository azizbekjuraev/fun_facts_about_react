function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="react-logo" src="./react-logo.png" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

// ReactDOM.render(<Header />, document.getElementById("head"));

function Footer() {
  return (
    <footer className="footer-el">
      <small>©️ 2022 JURAEV development. All rights reserved</small>
    </footer>
  );
}

function Text() {
  return (
    <div className="text-el">
      <h1>Why I like React?</h1>
      <ol>
        <li>Its fast</li>
        <li>Its Maintained by Facebook</li>
        <li>It runs many apps in the world</li>
        <li>User friendly</li>
      </ol>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <Text />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
