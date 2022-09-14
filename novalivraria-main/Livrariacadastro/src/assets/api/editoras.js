import axios from "axios";
export default class EditoresApi {
  async buscarTodasAsEditoras() {
    const response = await axios.get("https://trabalholivrariapi.herokuapp.com/editora");
    return response.data;
  }
}
