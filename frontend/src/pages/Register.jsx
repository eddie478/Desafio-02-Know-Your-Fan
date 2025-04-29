import React, { useState } from 'react';
import { FaInstagram, FaShoppingCart } from 'react-icons/fa'; // Importando os ícones

function Register() {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    cpf: '',
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
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-furia-white p-6">
      <div className="bg-furia-black text-white p-10 rounded-3xl shadow-2xl w-full max-w-lg fadeIn">
        <h1 className="text-4xl text-center font-bold mb-8 text-white">Cadastro do Fã FURIA eSports</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input 
            type="text" 
            name="nome" 
            value={formData.nome} 
            placeholder="Nome completo" 
            onChange={handleChange}
            className="p-4 rounded-xl bg-furia-gray text-white focus:outline-none focus:border-furia-yellow"
          />
          <input 
            type="text" 
            name="endereco"
            value={formData.endereco} 
            placeholder="Endereço"
            onChange={handleChange}
            className="p-4 rounded-xl bg-furia-gray text-white focus:outline-none focus:border-furia-yellow"
          />
          <input 
            type="text" 
            name="cpf"
            value={formData.cpf} 
            placeholder="CPF" 
            onChange={handleChange}
            className="p-4 rounded-xl bg-furia-gray text-white focus:outline-none focus:border-furia-yellow"
          />
          <input 
            type="file" 
            className="p-4 rounded-xl bg-furia-gray text-white focus:outline-none focus:border-furia-yellow"
          />
          <button type="submit" className="hover:bg-furia-light-purple hover:border-furia-light-purple">
            Cadastrar
          </button>
        </form>
      </div>

      {/* Ícones flutuantes */}
      <div className="fixed bottom-8 right-8 space-x-4 flex flex-col items-center">
        <a href="https://www.furia.gg/" target="_blank" rel="noopener noreferrer">
          <div className="bg-furia-yellow p-3 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300">
            <FaShoppingCart size={30} color="#1C1C1C" />
          </div>
        </a>

        <a href="https://www.instagram.com/furiagg/" target="_blank" rel="noopener noreferrer" className="mt-4">
          <div className="bg-furia-purple p-3 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300">
            <FaInstagram size={30} color="#ffffff" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Register;
