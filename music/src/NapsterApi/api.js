import axios from 'axios';

const apikey = "ZTg4OTQ0ZjQtY2UxNy00YjFlLThlZTUtMjU1MTI2MGMwMzll";
const limit = 20;

const napster_url = (genreId, page=0) => {
    page = page - 1;
    return `https://api.napster.com/v2.2/genres/${genreId}/tracks/top?limit=${limit}&offset=${page * limit}`;
};

export const getMusic = async (genreId, page) => {

    const tracks = await axios(napster_url(genreId, page), {
                    "method": "GET",
                    "headers": {
                        "apikey": apikey,
                    }
                })
                .then(response => {
                    return response.data;
                }).catch(error => {
                    console.log(error);
                });

    return tracks;
};
