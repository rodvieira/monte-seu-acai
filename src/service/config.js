import axios from 'axios';

const params = {
  baseURL: '',
};

export default class Http {
  static criarInstanciaAxios() {
    params.baseURL = 'https://5e56c8de4c695f001432f740.mockapi.io/';
    return axios.create(params);
  }
}
