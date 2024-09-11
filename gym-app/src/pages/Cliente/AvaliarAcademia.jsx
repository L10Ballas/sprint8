import React, { useState } from 'react';

function AvaliarAcademia() {
  const [avaliacao, setAvaliacao] = useState(0);
  const [comentario, setComentario] = useState('');

  const handleRatingChange = (value) => {
    setAvaliacao(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar a avaliação
    alert('Avaliação enviada com sucesso!');
  };

  return (
    <div className="container">
      <header>
        <h1>Avaliar Academia</h1>
      </header>
      <div className="rating-form">
        <form onSubmit={handleSubmit}>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                onClick={() => handleRatingChange(value)}
                style={{
                  cursor: 'pointer',
                  color: value <= avaliacao ? '#FFD700' : '#ddd',
                  fontSize: '2rem',
                }}
              >
                ★
              </span>
            ))}
          </div>
          <textarea
            name="comentario"
            placeholder="Seu Comentário"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            rows="5"
            required
          ></textarea>
          <button type="submit">Enviar Avaliação</button>
        </form>
      </div>
      <footer>
        <p>&copy; 2024 Academia FitTracker</p>
      </footer>
    </div>
  );
}

export default AvaliarAcademia;
