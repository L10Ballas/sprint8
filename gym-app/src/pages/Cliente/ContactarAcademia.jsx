import React, { useState } from 'react';

function ContactarAcademia() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar a mensagem para a academia
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <div className="container">
      <header>
        <h1>Contatar Academia</h1>
      </header>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Seu Nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensagem"
            placeholder="Sua Mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
      <footer>
        <p>&copy; 2024 Academia FitTracker</p>
      </footer>
    </div>
  );
}

export default ContactarAcademia;
