import { BrowserRouter, Routes, Route } from "react-router-dom";

// Composants réutilisables
import Entete from "./components/Entete";
import Pied from "./components/Pied";

// Pages
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";  
import Erreure from "./pages/erreure";  

function App() {
  return (
    <BrowserRouter>
      <Entete />

      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/erreure" element={<Erreure />} />
      </Routes>

      <Pied />
    </BrowserRouter>
  );
}

export default App;