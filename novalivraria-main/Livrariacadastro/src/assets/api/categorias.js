import axios from "axios";
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const response = await axios.get("https://trabalholivrariapi.herokuapp.com/categorias");
    return response.data;
  }
}
