import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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


          <Route index element={<Start />} />  {/* O index indica que o caminho da rota é igual ao da rota pai. */}
          <Route path='/about-me' element={<AboutMe />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
