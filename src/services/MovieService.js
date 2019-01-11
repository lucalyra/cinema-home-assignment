import axios from 'axios'


class MovieService{

    getMovieByName(name){  
       return axios.get('http://www.omdbapi.com/?t='+ name + '&type=movie&apikey=ebf7786a')
    }
    getMovieByImdbId(imdbId){
        return axios.get('http://www.omdbapi.com/?i='+ imdbId + '&type=movie&apikey=ebf7786a')
    }
    getMovieListByName(name){
        return axios.get('http://www.omdbapi.com/?s='+ name + '&type=movie&apikey=ebf7786a')
    }

    getMovieArrayByImdbId(idArray){
        let moviesList = []
        idArray.map(id => {
            axios.get('http://www.omdbapi.com/?i='+ id + '&type=movie&apikey=ebf7786a')
            .then(res => console.log(moviesList = moviesList.concat([res.data])) )
        })
        return moviesList
    }
}

export default new MovieService()