import axios from 'axios';

const API_URL = 'http://leoproti.com.br:8004/produtos';

export const getProdutos = () => axios.get(API_URL);
export const postProduto = (data) => axios.post(API_URL, data);
export const putProduto = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteProduto = (id) => axios.delete(`${API_URL}/${id}`);
