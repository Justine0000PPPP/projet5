import { BrowserRouter, Routes, Route } from "react-router-dom";

// Composants communs
import Header from "./components/header";
import Footer from "./components/footer";

// Pages
import Home from "./pages/Home";
import Apropo from "./pages/Apropo";
import FichesLogement from "./pages/fiches_logement";
import Page404 from "./pages/page404";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropo />} />
        <Route path="/logement/:id" element={<FichesLogement />} />
        <Route path="*" element={<Page404 />} />
      </Routes>


      <Footer />
    </BrowserRouter>
  );
}

export default App;