import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Start from './paginas/start';
import AboutMe from './paginas/aboutMe'; 
import Menu from './componentes/menu';
import PaginaPadrao from './componentes/PaginaPadrao';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>


        <Route path='/' element={<PaginaPadrao/>}>


          <Route index element={<Start />} />
          <Route path='/about-me' element={<AboutMe />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
