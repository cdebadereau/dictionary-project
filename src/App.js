import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>English Dictionary</h1>
        <main>
          <Dictionary />
        </main>
        <footer>
          This website was coded by Cyrielle de Badereau and is{" "}
          <a
            href="https://github.com/cdebadereau/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open source
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
