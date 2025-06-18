import axios from 'axios';

const API_URL = 'http://leoproti.com.br:8004/alunos';

export const getAlunos = () => axios.get(API_URL);
export const postAluno = (data) => axios.post(API_URL, data);
export const putAluno = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteAluno = (id) => axios.delete(`${API_URL}/${id}`);
