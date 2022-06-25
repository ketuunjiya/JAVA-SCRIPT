import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;