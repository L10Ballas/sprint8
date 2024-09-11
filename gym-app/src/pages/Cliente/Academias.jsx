import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Cliente/styles/academias.css';

function ClienteAcademias() {
  const [searchQuery, setSearchQuery] = useState('');
  const [tipoFiltro, setTipoFiltro] = useState('');
  const [precoFiltro, setPrecoFiltro] = useState('');
  const [detalhesVisiveis, setDetalhesVisiveis] = useState({});

  const academias = [
    {
      id: 1,
      nome: 'Academia 1',
      endereco: 'Rua A, 123',
      tipo: 'Crossfit',
      preco: 'R$ 150/mês',
      horario: '6h - 22h',
      imagem: '/images/academia1.jpg',
    },
    {
      id: 2,
      nome: 'Academia 2',
      endereco: 'Avenida B, 456',
      tipo: 'Musculação',
      preco: 'R$ 120/mês',
      horario: '5h - 23h',
      imagem: '/images/academia2.jpg',
    },
    // Adicione mais academias conforme necessário
  ];

  // Função para filtrar academias baseado na busca
  const filteredAcademias = academias
    .filter((academia) =>
      academia.nome.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((academia) =>
      tipoFiltro ? academia.tipo === tipoFiltro : true
    )
    .filter((academia) => {
      if (!precoFiltro) return true;
      const preco = parseFloat(academia.preco.replace('R$ ', '').replace('/mês', '').replace(',', '.'));
      const [min, max] = precoFiltro.split('-').map(Number);
      return preco >= min && (!max || preco <= max);
    });

  const toggleDetalhes = (id) => {
    setDetalhesVisiveis((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Alterna a visibilidade
    }));
  };

  return (
    <div className="container">
      <header>
        <h1>Academias Disponíveis</h1>
        <input
          type="text"
          placeholder="Buscar academias..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <div className="filters">
          <select
            value={tipoFiltro}
            onChange={(e) => setTipoFiltro(e.target.value)}
            className="filter-select"
          >
            <option value="">Tipo</option>
            <option value="Crossfit">Crossfit</option>
            <option value="Musculação">Musculação</option>
            {/* Adicione mais tipos conforme necessário */}
          </select>
          <select
            value={precoFiltro}
            onChange={(e) => setPrecoFiltro(e.target.value)}
            className="filter-select"
          >
            <option value="">Faixa de Preço</option>
            <option value="0-100">Até R$ 100</option>
            <option value="100-200">R$ 100 - R$ 200</option>
            <option value="200-">Acima de R$ 200</option>
          </select>
        </div>
      </header>

      <div className="academia-grid">
        {filteredAcademias.map((academia) => (
          <div className="academia-card" key={academia.id}>
            <img src={academia.imagem} alt={academia.nome} className="academia-img" />
            <h2>{academia.nome}</h2>

            <button
              onClick={() => toggleDetalhes(academia.id)}
              className="detalhes-btn"
            >
              {detalhesVisiveis[academia.id] ? 'Ocultar Detalhes' : 'Ver Detalhes'}
            </button>

            {detalhesVisiveis[academia.id] && (
              <div className="detalhes">
                <p>Endereço: {academia.endereco}</p>
                <p>Tipo: {academia.tipo}</p>
                <p>Preço: {academia.preco}</p>
                <p>Horário: {academia.horario}</p>
                <Link to={`/academias/${academia.id}`} className="detalhes-link">
                  Ver Mais
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <footer>
        <p>&copy; 2024 Academia FitTracker</p>
      </footer>
    </div>
  );
}

export default ClienteAcademias;
