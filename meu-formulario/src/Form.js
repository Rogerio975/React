import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome</label>
        <input {...register('nome', { required: 'Nome é obrigatório' })} />
        {errors.nome && <p>{errors.nome.message}</p>}
      </div>

      <div>
        <label>CPF</label>
        <input {...register('cpf', { required: 'CPF é obrigatório', pattern: { value: /^\d{11}$/, message: 'CPF inválido' } })} />
        {errors.cpf && <p>{errors.cpf.message}</p>}
      </div>

      <div>
        <label>E-mail</label>
        <input {...register('email', { required: 'E-mail é obrigatório', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'E-mail inválido' } })} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Endereço</label>
        <input {...register('endereco', { required: 'Endereço é obrigatório' })} />
        {errors.endereco && <p>{errors.endereco.message}</p>}
      </div>

      <div>
        <label>CEP</label>
        <input {...register('cep', { required: 'CEP é obrigatório', pattern: { value: /^\d{5}-\d{3}$/, message: 'CEP inválido' } })} />
        {errors.cep && <p>{errors.cep.message}</p>}
      </div>

      <div>
        <label>Telefone</label>
        <input {...register('telefone', { required: 'Telefone é obrigatório', pattern: { value: /^\d{10,11}$/, message: 'Telefone inválido' } })} />
        {errors.telefone && <p>{errors.telefone.message}</p>}
      </div>

      <div>
        <label>Data de Nascimento</label>
        <input type="date" {...register('dataNascimento', { required: 'Data de nascimento é obrigatória' })} />
        {errors.dataNascimento && <p>{errors.dataNascimento.message}</p>}
      </div>

      <div>
        <label>Senha</label>
        <input type="password" {...register('senha', { required: 'Senha é obrigatória', minLength: { value: 6, message: 'Senha deve ter no mínimo 6 caracteres' } })} />
        {errors.senha && <p>{errors.senha.message}</p>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;