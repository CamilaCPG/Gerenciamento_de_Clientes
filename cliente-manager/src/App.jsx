import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Lista from "./pages/listas/Lista.jsx";
import Cadastrar from "./pages/cadastrar/Cadastrar.jsx";
// import About (faltando abaixo)

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/clientes" element={<Lista />} />
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
