import logo from "./images/Logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Improved All-In-One Solar Software Coming Soon</h3>
        <div className="Link">
          <p className="SmallText">
            Interested in Solar?&nbsp;
          </p>
            <a
              className="App-link"
              href="https://goionixsolar.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Ionix!
            </a>
        </div>
      </header>
    </div>
  );
}

export default App;
