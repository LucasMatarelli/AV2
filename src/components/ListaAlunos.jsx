import { useEffect, useState } from 'react';
import { getAlunos, deleteAluno } from '../api/alunoService';
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);

  const carregarAlunos = async () => {
    const { data } = await getAlunos();
    setAlunos(data);
  };

  const excluirAluno = async (id) => {
    await deleteAluno(id);
    carregarAlunos();
  };

  useEffect(() => {
    carregarAlunos();
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nome</TableCell>
          <TableCell>Curso</TableCell>
          <TableCell>Semestre</TableCell>
          <TableCell>Ações</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {alunos.map((aluno) => (
          <TableRow key={aluno.id}>
            <TableCell>{aluno.nome}</TableCell>
            <TableCell>{aluno.curso}</TableCell>
            <TableCell>{aluno.semestre}</TableCell>
            <TableCell>
              <Button color="error" onClick={() => excluirAluno(aluno.id)}>Excluir</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
