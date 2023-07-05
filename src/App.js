import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/News";
import NewsDetail from "./components/NewsDetail";

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route path="/admin" element={<Admin></Admin>} />
        <Route
          path="/"
          element={<News category="general" key="general"></News>}
        />
        <Route
          path="/krishna"
          element={<News category="krishna" key="krishna"></News>}
        />
        <Route
          path="/guntur"
          element={<News category="guntur" key="guntur"></News>}
        />
        <Route
          path="/eluru"
          element={<News category="eluru" key="eluru"></News>}
        />
        <Route
          path="/details/:id"
          element={<NewsDetail></NewsDetail>}
        />
      </Routes>
    </Router>
  );
}

export default App;
