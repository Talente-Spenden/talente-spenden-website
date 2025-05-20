import "./App.css";
import Routes from "./components/router/Routes";
import { ViewportProvider } from "./contexts/ViewportContext";

function App() {
  return (
    <ViewportProvider>
      <div className="top-0 left-0 w-screen h-full overflow-x-hidden overflow-y-visible">
        <Routes />
      </div>
    </ViewportProvider>
  );
}

export default App;
