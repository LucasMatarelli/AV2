import { useEffect, useState } from 'react';
import { getProdutos, deleteProduto } from '../api/produtoService';
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = async () => {
    const { data } = await getProdutos();
    setProdutos(data);
  };

  const excluirProduto = async (id) => {
    await deleteProduto(id);
    carregarProdutos();
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nome</TableCell>
          <TableCell>Preço</TableCell>
          <TableCell>Descrição</TableCell>
          <TableCell>Ações</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {produtos.map((produto) => (
          <TableRow key={produto.id}>
            <TableCell>{produto.nome}</TableCell>
            <TableCell>R${produto.preco}</TableCell>
            <TableCell>{produto.descricao}</TableCell>
            <TableCell>
              <Button color="error" onClick={() => excluirProduto(produto.id)}>Excluir</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
