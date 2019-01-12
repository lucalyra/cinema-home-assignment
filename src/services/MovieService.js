import axios from 'axios'


class MovieService{

    getMovieByName(name){  
       return axios.get('https://www.omdbapi.com/?t='+ name + '&type=movie&apikey=ebf7786a')
    }
    getMovieByImdbId(imdbId){
        return axios.get('https://www.omdbapi.com/?i='+ imdbId + '&type=movie&apikey=ebf7786a')
    }
    getMovieListByName(name){
        return axios.get('https://www.omdbapi.com/?s='+ name + '&type=movie&apikey=ebf7786a')
    }
}

export default new MovieService()