import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const API_KEY = 'af0d21efbf20f35dc614b12c30173fb9'

export const getTrending = async () => {
    try {
        const { data } = await axios.get(`trending/movie/day`, {
            params: {
                api_key: 'af0d21efbf20f35dc614b12c30173fb9',
            },
        });
        return data.results;
    } catch (err) {
        return err.message;
    }
};

export const getByTitle = async query => {
    try {
        const { data } = await axios.get(
            'search/movie?include_adult=false&language=en-US&page=1', {
                params: {
                    api_key: 'af0d21efbf20f35dc614b12c30173fb9',
                    query
                }
            }
        )
        return data;
    } catch (err) {
        return err.message;
    }
}

export const getByID = async movieId => {
    try {
        const { data } = await axios.get(
            `movie/${movieId}?api_key=${API_KEY}`
        )
        return data;
    } catch (err) {
        return err.message;
    }
}

export const getByCast = async movieId => {
    try {
        const { data } = await axios.get(
            `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
        );
        return data;
    } catch (err) {
        return err.message;
    }
}

export const getByReviews = async movieId => {
    try {
        const { data } = await axios.get(
            `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
        );
        return data;
    } catch (err) {
        return err.message;
    }
}