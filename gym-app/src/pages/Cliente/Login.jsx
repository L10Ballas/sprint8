import React from 'react';

function ClienteLogin() {
  return (
    <div className="container">
      <header>
        <h1>Login do Cliente</h1>
      </header>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
      <footer>
        <p>&copy; 2024 Academia FitTracker</p>
      </footer>
    </div>
  );
}

export default ClienteLogin;
