import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Accueil from "./pages/Accueil";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
