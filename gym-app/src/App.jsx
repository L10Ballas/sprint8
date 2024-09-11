import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ClienteLogin from './pages/Cliente/Login';
import ClientePerfil from './pages/Cliente/Perfil';
import ClienteAcademias from './pages/Cliente/Academias';
import ContactarAcademia from './pages/Cliente/ContactarAcademia';
import AvaliarAcademia from './pages/Cliente/AvaliarAcademia';
import Notificacoes from './pages/Cliente/Notificacoes';
import Recompensas from './pages/Cliente/Recompensas'; // Nova funcionalidade

import GerenteLogin from './pages/Gerente/Login';
import CadastrarGerente from './pages/Gerente/Cadastrar';
import ManterAcademia from './pages/Gerente/ManterAcademia';
import EstatisticasAnuncio from './pages/Gerente/EstatisticasAnuncio';
import GerenciarPlanos from './pages/Gerente/GerenciarPlanos';
import Equipamentos from './pages/Gerente/Equipamentos';
import Funcionarios from './pages/Gerente/Funcionarios';
import MarketingLocal from './pages/Gerente/MarketingLocal'; // Nova funcionalidade
import AnalisesDesempenho from './pages/Gerente/AnalisesDesempenho'; // Nova funcionalidade

import './styles/app.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/academias">Academias</Link>
        <Link to="/contactar">Contatar</Link>
        <Link to="/avaliar">Avaliar</Link>
        <Link to="/recompensas">Recompensas</Link> {/* Link para nova funcionalidade */}
        <Link to="/gerente-login">Login Gerente</Link>
        <Link to="/gerente-cadastrar">Cadastrar Gerente</Link>
        <Link to="/manter-academia">Manter Academia</Link>
        <Link to="/estatisticas-anuncio">Estatísticas</Link>
        <Link to="/gerenciar-planos">Gerenciar Planos</Link>
        <Link to="/equipamentos">Equipamentos</Link>
        <Link to="/funcionarios">Funcionários</Link>
        <Link to="/marketing-local">Marketing Local</Link> {/* Link para nova funcionalidade */}
        <Link to="/analises-desempenho">Análises de Desempenho</Link> {/* Link para nova funcionalidade */}
        <Link to="/notificacoes" className="notifications-link">
    <i className="fas fa-bell"></i>
  </Link>
  <Link to="/"></Link>
        <Link to="/perfil" className="profile-link">
    <i className="fas fa-user"></i>
  </Link>
      </nav>
      <Routes>
        <Route path="/" element={<ClienteLogin />} />
        <Route path="/perfil" element={<ClientePerfil />} />
        <Route path="/academias" element={<ClienteAcademias />} />
        <Route path="/contactar" element={<ContactarAcademia />} />
        <Route path="/avaliar" element={<AvaliarAcademia />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
        <Route path="/recompensas" element={<Recompensas />} /> {/* Rota para nova funcionalidade */}
        <Route path="/gerente-login" element={<GerenteLogin />} />
        <Route path="/gerente-cadastrar" element={<CadastrarGerente />} />
        <Route path="/manter-academia" element={<ManterAcademia />} />
        <Route path="/estatisticas-anuncio" element={<EstatisticasAnuncio />} />
        <Route path="/gerenciar-planos" element={<GerenciarPlanos />} />
        <Route path="/equipamentos" element={<Equipamentos />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/marketing-local" element={<MarketingLocal />} /> {/* Rota para nova funcionalidade */}
        <Route path="/analises-desempenho" element={<AnalisesDesempenho />} /> {/* Rota para nova funcionalidade */}
      </Routes>
    </Router>
  );
}

export default App;
