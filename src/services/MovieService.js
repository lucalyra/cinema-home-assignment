import axios from 'axios'


class MovieService{

    getMovieByName(name){  
       return axios.get('http://www.omdbapi.com/?t='+ name + '&apikey=ebf7786a')
    }

    getMovieByImdbId(imdbId){
        return axios.get('http://www.omdbapi.com/?i='+ imdbId + '&apikey=ebf7786a')
    }
    getMovieListByName(name){
        return axios.get('http://www.omdbapi.com/?s='+ name + '&type=movie&apikey=ebf7786a')
    }
}

export default new MovieService()