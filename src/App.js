import React, {Component} from 'react';
import { moviesList } from './moviesList'
import Movie from './components/Movie/Movie'
import MovieBox from "./components/MovieBox/MovieBox";
import Filter from "./components/Filter/Filter";
import Sorting from "./components/Sorting/Sorting";
import Info from "./components/Info/Info";
import './App.css'


export class App extends Component{
    state = {
        movies: moviesList.movies,
        openedMovieId: null,
        searchMovieName: '',
        sortingByLikesClick: false,
        sortingByRatingClick: false,
        changed: false
    };

    openMovie = (movieId) =>{
        this.setState(
            {openedMovieId : movieId}
        )
    }

    handleLike = (movieId) =>{
        const likedMovie = this.state.movies.find(movie => movie.id === movieId);
        likedMovie.likes +=1;
        this.setState({
            changed:true
        })
    }

    handleDislike = (movieId) =>{
        const dislikedMovie = this.state.movies.find(movie => movie.id === movieId);
        dislikedMovie.likes -=1;
        this.setState({
            changed:true
        })
    }

    handleRatingChange = (id, numberOfStars) =>{
        const changedMovie = this.state.movies.find(movie => movie.id === id);
        changedMovie.stars = numberOfStars;
        this.setState({
            changed:true
        })
    }

    handleSortByLikes = () =>{
        const origin = this.state.movies.slice();
        if(!this.state.sortingByLikesClick){
            let index = 0;
            let min;
            let extra;
            for(let i=0; i< origin.length-1; i++){
                min=origin[i];
                for(let a=i+1; a<origin.length; a++){
                    if(min.likes <= origin[a].likes ){
                        min=origin[a];
                        index = a;
                    }
                }
                extra = origin[i];
                origin[i]=min;
                origin[index]=extra;
            }
            this.setState(
                {
                    movies: origin,
                    sortingByLikesClick: true
                }
            )
        }else{
            const reversed = origin.reverse();
            this.setState(
                {
                    movies: reversed,
                    sortingByLikesClick: false
                }
            )
        }
    }

    handleSortByRating = () =>{
        const origin = this.state.movies.slice();
        if(!this.state.sortingByRatingClick){
            let index = 0;
            let min;
            let extra;
            for(let i=0; i< origin.length-1; i++){
                min=origin[i];
                for(let a=i+1; a<origin.length; a++){
                    if(min.stars <= origin[a].stars ){
                        min=origin[a];
                        index = a;
                    }
                }
                extra = origin[i];
                origin[i]=min;
                origin[index]=extra;
            }
            this.setState(
                {
                    movies: origin,
                    sortingByRatingClick: true
                }
            )
        }else{
            const reversed = origin.reverse();
            this.setState(
                {
                    movies: reversed,
                    sortingByRatingClick: false
                }
            )
        }
    }

    handleReset = () =>{
        this.setState(
            {
                    movies: moviesList.movies,
                    searchMovieName: '',
                    sortingByLikesClick: false,
                    sortingByRatingClick: false,
                    openedMovieId: null
                }
        )
        document.querySelector('.search-input').value = '';
    }

    handleSearch = (value) =>{
        let searchResult;
        if(!value){
            this.setState(
                {searchMovieName: '',
                    movies: moviesList.movies}
            )
        }else{
            searchResult = this.state.movies.filter(movie => movie.title.toUpperCase().includes(value.toUpperCase()));
            this.setState(
                {searchMovieName: value.toUpperCase(),
                    movies: searchResult}
            )
        }
    }


    render = () => {

        const { movies, searchMovieName, openedMovieId } = this.state;

        const openedMovie = movies.find(movie => movie.id === openedMovieId);

        const searchResult = movies.filter(movie => movie.title.toUpperCase().includes(searchMovieName));

        return (
            <div className = 'container'>
                <div className='row'>
                    <div className="card bg-primary col-7">
                        <div className="card-header header">
                            <h3 className='text-light'>Movies</h3>
                        </div>
                    </div>
                    <div className = 'movies-list col-7'>
                        <Sorting sortByLikesClick={ this.handleSortByLikes} sortByRatingClick = {this.handleSortByRating} reset = {this.handleReset}/>
                        <Filter searchByName = {this.handleSearch} />
                        {
                            searchResult.map(movie =>
                                    <Movie key = { movie.id } id = { movie.id } openMovie = { this.openMovie } movie = { movie } likeMovie = {this.handleLike} dislikeMovie = {this.handleDislike} handleClick = {this.handleRatingChange} />
                            )
                        }
                    </div>
                    <div className='movie-box col-4 position-fixed '>
                        {
                            this.state.openedMovieId ? <MovieBox movieData = {openedMovie}  handleClick = {this.handleRatingChange}/> : <Info />
                        }
                    </div>
                </div>
            </div>
        )
    };

}

export default App;
