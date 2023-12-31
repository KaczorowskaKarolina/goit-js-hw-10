import axios from 'axios';

const AUTH_TOKEN =
  'live_8P98bnMxGIG9Q1ho6xFAqhBnFXKswA5rOqLsiumXhW13lQl5afcd4Ttb7goWIuAu';
axios.defaults.headers.common['x-api-key'] = AUTH_TOKEN;

const API_BASE_URL = 'https://api.thecatapi.com/v1';

//Function to fetch the list of cat breeds
const fetchBreeds = async () => {
  try {
    return await axios.get(`${API_BASE_URL}/breeds`).then(response => {
      console.log(response.data);
      return response.data;
    });
  } catch (error) {
    onAxiosError(error);
  }
};

//Function to fetch the list of cat breeds
const fetchCatByBreed = async idBreed => {
  try {
    return await axios
      .get(`${API_BASE_URL}/images/search?breed_ids=${idBreed}`)
      .then(response => {
        console.log(response.data);
        return response.data;
      });
  } catch (error) {
    onAxiosError(error);
  }

  function onAxiosError(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.log(error.response);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error);
    }
  }
};

//export name function
export { fetchBreeds, fetchCatByBreed };