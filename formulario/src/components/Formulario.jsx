import { useState } from "react";

export default function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    nomeCompleto: "",
    cpf: "",
    endereco: "",
    cep: "",
    cidade: "",
    estado: "",
    telefone: "",
    whatsapp: false,
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 space-y-4 bg-white shadow-lg rounded-lg"
    >
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={formData.nome}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="sobrenome"
        placeholder="Sobrenome"
        value={formData.sobrenome}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="nomeCompleto"
        placeholder="Nome Completo"
        value={formData.nomeCompleto}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="cpf"
        placeholder="CPF"
        value={formData.cpf}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="endereco"
        placeholder="Endereço"
        value={formData.endereco}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="cep"
        placeholder="CEP"
        value={formData.cep}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="cidade"
        placeholder="Cidade"
        value={formData.cidade}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="estado"
        placeholder="Estado"
        value={formData.estado}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <div>
        <input
          type="tel"
          name="telefone"
          placeholder="Número de telefone"
          value={formData.telefone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <label className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            name="whatsapp"
            checked={formData.whatsapp}
            onChange={handleChange}
          />
          Esse número é WhatsApp?
        </label>
      </div>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
}