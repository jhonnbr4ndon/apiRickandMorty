import axios from "axios";

const apiRickMorty = axios.create(
    {baseURL:"https://rickandmortyapi.com/api/character/"
}
);

export default apiRickMorty;