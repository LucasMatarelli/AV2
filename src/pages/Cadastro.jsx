import FormAluno from "../components/FormAluno";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Cadastrar Aluno</h2>
      <FormAluno onAlunoCadastrado={() => navigate('/')} />
    </div>
  );
}
