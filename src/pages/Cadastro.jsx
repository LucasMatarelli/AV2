import FormProduto from "../components/FormProduto";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Cadastrar Produto</h2>
      <FormProduto onProdutoCadastrado={() => navigate('/')} />
    </div>
  );
}
