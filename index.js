import { cidades } from "./cidades.js"; 
import axios from "axios";


// new url = "https://taking.bitrix24.com.br/rest/164/o7n997gkh0216vkm/lists.element.add.json"
const url = new URL("/rest/164/o7n997gkh0216vkm/lists.element.add.json", "https://taking.bitrix24.com.br")


async function addCidades() {

    // const firstCity = cidades[0]

    for (let i = 0; i < cidades.length; i++) {

      const saveObj = {
        "IBLOCK_TYPE_ID": "lists",
        "IBLOCK_ID": "123",
        "ELEMENT_CODE": cidades[i].id,
        "FIELDS": {
          "NAME": cidades[i].nome,
        }
      }

      try {
          await axios.post(url.toString(), saveObj)
           .then((response) => {
             console.log(response.status, i/cidades.length)
           })
      } catch (error) {
          console.error(error.status)
      }
    }

}
addCidades()