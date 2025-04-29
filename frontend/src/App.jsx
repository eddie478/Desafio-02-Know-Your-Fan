import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    cpf: "",
    interesses: "",
    atividades: "",
    eventos: "",
    compras: "",
    redesSociais: "",
    perfilEsports: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyhCROGEf22wKQzvOXGujbrhS4M0IPUX7Q2lz6I5mHwKgl4DEjFYLh3Ik10PD5212_nlQ/exec', { 
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      alert("Cadastro enviado com sucesso!");

      // Limpar o formulário depois do envio
      setFormData({
        nome: "",
        endereco: "",
        cpf: "",
        interesses: "",
        atividades: "",
        eventos: "",
        compras: "",
        redesSociais: "",
        perfilEsports: "",
      });
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Ocorreu um erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <div className="app-container">
      {/* Logo */}
      <div className="header">
      <img src="/furia-logo.jpg" alt="Logo da FURIA" className="furia-logo" />
      </div>

      {/* Título */}
      <h1>Cadastro do Fan FURIA eSports</h1>

      {/* Formulário */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={formData.endereco}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
        <textarea
          name="interesses"
          placeholder="Interesses"
          value={formData.interesses}
          onChange={handleChange}
          required
        />
        <textarea
          name="atividades"
          placeholder="Atividades"
          value={formData.atividades}
          onChange={handleChange}
          required
        />
        <textarea
          name="eventos"
          placeholder="Eventos"
          value={formData.eventos}
          onChange={handleChange}
          required
        />
        <textarea
          name="compras"
          placeholder="Compras"
          value={formData.compras}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="redesSociais"
          placeholder="Redes Sociais"
          value={formData.redesSociais}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="perfilEsports"
          placeholder="Perfil em Sites de eSports"
          value={formData.perfilEsports}
          onChange={handleChange}
          required
        />

        <button type="submit">Cadastrar</button>
      </form>

      {/* Ícones Fixos */}
      <div className="fixed-icons" style={{ position: 'fixed', right: '20px', bottom: '20px' }}>
        <div>
          <a href="https://www.furia.gg/" target="_blank" rel="noopener noreferrer">
            🛒
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/furiagg/" target="_blank" rel="noopener noreferrer">
            📷
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
