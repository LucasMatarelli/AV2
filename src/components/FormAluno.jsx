import { TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
import { postAluno } from '../api/alunoService';

export default function FormAluno({ onAlunoCadastrado }) {
  const [form, setForm] = useState({ nome: '', curso: '', semestre: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nome || !form.curso || !form.semestre) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    try {
      await postAluno(form);
      setForm({ nome: '', curso: '', semestre: '' });
      onAlunoCadastrado();
    } catch (error) {
      alert('Erro ao cadastrar aluno');
      console.error(error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <TextField label="Nome" name="nome" value={form.nome} onChange={handleChange} fullWidth />
      <TextField label="Curso" name="curso" value={form.curso} onChange={handleChange} fullWidth />
      <TextField label="Semestre" name="semestre" value={form.semestre} onChange={handleChange} fullWidth />
      <Button variant="contained" type="submit">Cadastrar</Button>
    </Box>
  );
}
