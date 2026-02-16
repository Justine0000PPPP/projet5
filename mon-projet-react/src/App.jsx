import { BrowserRouter, Routes, Route } from "react-router-dom";

// Composants communs
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

// Pages
import Home from "./home/home";
import Apropo from "./apropo/apropo";
import FichesLogement from "./fiches-logement/fiches-logement";
import Page404 from "./page404/page404";

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
