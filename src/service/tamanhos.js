import Http from './config';

export default {
  fetchTamanhos: () => Http.criarInstanciaAxios().get('tamanhos'),
};
