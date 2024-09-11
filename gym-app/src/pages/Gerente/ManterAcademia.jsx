import React, { useState } from 'react';

function ManterAcademia() {
  const [academias, setAcademias] = useState([
    { id: 1, nome: 'Academia 1', endereco: 'Rua A, 123' },
  ]);
  const [novaAcademia, setNovaAcademia] = useState({ nome: '', endereco: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaAcademia({
      ...novaAcademia,
      [name]: value,
    });
  };

  const handleAddAcademia = () => {
    setAcademias([...academias, { ...novaAcademia, id: academias.length + 1 }]);
    setNovaAcademia({ nome: '', endereco: '' });
  };

  return (
    <div className="container">
      <header>
        <h1>Manter Academia</h1>
      </header>
      <div className="academia-form">
        <input
          type="text"
          name="nome"
          placeholder="Nome da Academia"
          value={novaAcademia.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={novaAcademia.endereco}
          onChange={handleChange}
          required
        />
        <button onClick={handleAddAcademia}>Adicionar Academia</button>
      </div>
      <ul className="academia-list">
        {academias.map((academia) => (
          <li key={academia.id}>
            <h2>{academia.nome}</h2>
            <p>{academia.endereco}</p>
          </li>
        ))}
      </ul>
      <footer>
        <p>&copy; 2024 Academia FitTracker</p>
      </footer>
    </div>
  );
}

export default ManterAcademia;
