import { API_HOST } from "../utils/constants";

export async function getPokemonsApi(endPointUrl) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;

    //Si se pidió cargar más datos los coge como endpoint sino la url declarada arriba
    const response = await fetch(endPointUrl || url);

    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(url) {
  try {
    const response = await fetch(url);

    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

//Obtener informacion de un solo pokemon

export async function getUniquePokemonDetailApi(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`
    const response = await fetch(url)
    const result = await response.json()
    
    return result
  } catch (error) {
    throw error
  }
}
