import Http from './config';

export default {
  fetchPersonalizacao: () => Http.criarInstanciaAxios().get('personalizacoes'),
};
