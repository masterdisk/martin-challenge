import axios from "axios"

export default {

  //get all the countries with its data
  async getCountries() {

    let res = await axios.get("https://6217a42671e7672e53868583.mockapi.io/tableForUsers");
    return res.data;

  },
  //check if country is unique
  async checkIfExists(name) {
    let res = await axios.get("https://6217a42671e7672e53868583.mockapi.io/tableForUsers",
      {
        params:
          {search: name}
      });

    return (res.data);
  },
  //add city
  async addCity(object) {
    let res = await axios.post("https://6217a42671e7672e53868583.mockapi.io/tableForUsers", object);

    return res.data;
  },
//add city
  async markCity(id, visited) {
    let res = await axios.put("https://6217a42671e7672e53868583.mockapi.io/tableForUsers/" + id, { city_visited: !visited });
    console.log(res.data);
    return res.data;
  },

}
