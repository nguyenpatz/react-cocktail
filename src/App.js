import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Error from "./pages/Error";
import DetailCocktail from "./components/DetailCocktail";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<DetailCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
