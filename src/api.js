import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const searchImage = async (currentPage, perPage, query) => {
    const params = new URLSearchParams({
        key: '39291497-afd0346a938db9581e617b7f9',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: currentPage,
        per_page: perPage,
    });

   const response = await axios.get(`/?${params}`);
   return response.data;
};