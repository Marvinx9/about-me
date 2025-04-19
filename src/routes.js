import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio/inicio";
import SobreMin from "./paginas/SobreMin";
import Menu from "./components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremin" element={<SobreMin />} />
        <Route path="*" element={<div>Página não encontrada!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
