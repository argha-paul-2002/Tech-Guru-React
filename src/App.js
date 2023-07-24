import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
