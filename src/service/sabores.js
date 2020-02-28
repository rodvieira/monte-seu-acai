import Http from './config';

export default {
  fetchSabores: () => Http.criarInstanciaAxios().get('sabores'),
};
