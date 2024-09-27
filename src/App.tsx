import "./App.css";
import TSLogo from "./assets/ts-logo-standard";

function App() {
  return (
    <div className="bg-purple-light">
      <TSLogo />
      <h1>
        We're glad to have you here! We're currently working hard to finish the
        Talente Spenden website.
      </h1>
      <div>
        <p>
          Until then, you can find more information about Talente Spenden at the
          official website of the TUM Deutschlandstipendium:{" "}
          <a href="https://www.tum.de/studium/studienfinanzierung/stipendien/stipendien-der-tum/deutschlandstipendium/initiativen">
            TUM Deutschlandstipendium: Talente Spenden (tum.de)
          </a>
        </p>
        <p>
          You have an idea and want to talk to us? Feel free to contact us here:{" "}
          <a href="mailto:talente-spenden@tum.de">talente-spenden@tum.de</a>
        </p>
      </div>
    </div>
  );
}

export default App;
