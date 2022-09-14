import axios from "axios";
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const response = await axios.get("https://trabalholivrariapi.herokuapp.com/livros");
    return response.data;
  }
}