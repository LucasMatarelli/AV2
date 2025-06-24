# AV2 - Sistema de Cadastro de Produtos 🛒

Este projeto é um sistema web para cadastro de produtos, desenvolvido com **React + Vite**, utilizando **Material UI** para a interface, **Axios** para comunicação com a API e **React Router DOM** para navegação entre páginas.

---

## 🔧 Funcionalidades

- ✅ Cadastro de produtos (nome, preço e descrição)
- 📋 Listagem dos produtos cadastrados
- 📝 Edição de produtos
- ❌ Exclusão de produtos
- 🔗 Integração com API externa RESTful

---

## 🧪 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)

---

## 🚀 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/LucasMatarelli/AV2.git

# Acesse a pasta do projeto
cd AV2

# Instale as dependências
npm install

# Execute o projeto
npm run dev
Acesse no navegador:
👉 http://localhost:5173

🌐 API Utilizada
Documentação da API: http://leoproti.com.br:8004/swagger-ui/index.html

Endpoint de produtos: http://leoproti.com.br:8004/produtos-view

📦 Deploy no Vercel
O projeto está disponível online no link principal:
https://av-2-ten.vercel.app/

⚠️ Importante - Limitação no Deploy
Devido a restrições de segurança dos navegadores, o deploy no Vercel usa HTTPS, enquanto a API externa disponível usa HTTP, o que causa um bloqueio de requisição chamado Mixed Content.

Isso faz com que as funcionalidades de cadastro, edição e exclusão de produtos não funcionem no ambiente online por causa dessa restrição, mesmo que funcionem perfeitamente no ambiente local.

👨‍💻 Autor
Lucas Soares Matarelli
