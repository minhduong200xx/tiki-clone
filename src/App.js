import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Details from "./pages/Details";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="detail" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
