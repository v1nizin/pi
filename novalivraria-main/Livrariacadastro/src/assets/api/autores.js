import axios from "axios";
export default class AutoresApi {
  async buscarTodosOsAutores() {
    const response = await axios.get("https://trabalholivrariapi.herokuapp.com/autores");
    return response.data;
  }
}
