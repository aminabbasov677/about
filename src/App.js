import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./compenents/Navbar";
import Haqqinda from "./pages/Haqqinda";
import IshNumuneleri from "./pages/IshNumuneleri";
import Elaqe from "./pages/Elaqe";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Haqqinda />} />
          <Route path="/ish" element={<IshNumuneleri />} />
          <Route path="/elaqe" element={<Elaqe />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;