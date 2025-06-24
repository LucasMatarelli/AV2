import { TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
import { postProduto } from '../api/produtoService';

export default function FormProduto({ onProdutoCadastrado }) {
  const [form, setForm] = useState({ nome: '', preco: '', descricao: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nome || !form.preco || !form.descricao) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    try {
      await postProduto(form);
      setForm({ nome: '', preco: '', descricao: '' });
      onProdutoCadastrado();
    } catch (error) {
      alert('Erro ao cadastrar produto');
      console.error(error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600, margin: 'auto' }}>
      <TextField label="Nome" name="nome" value={form.nome} onChange={handleChange} fullWidth />
      <TextField label="Preço" name="preco" value={form.preco} onChange={handleChange} fullWidth />
      <TextField label="Descrição" name="descricao" value={form.descricao} onChange={handleChange} fullWidth />
      <Button variant="contained" type="submit">Cadastrar</Button>
    </Box>
  );
}
