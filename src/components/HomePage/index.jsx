import React, {Component} from 'react';
import {connect} from "react-redux";
import {getMovies} from "./redux/actions";
import PropTypes from 'prop-types';
import Movie from './Movie';
import Filter from "./Filter";
import Sorting from "./Sorting";
import './home-page_style.css'
import withTranslator from "../../withTranslator";

class HomePage extends Component {

    componentDidMount = () =>{
        this.props.dispatchData();
    }

    setMovieList = (mov, searchN) => {
        const searchName = mov.filter(movie => movie.title.toUpperCase().includes(searchN.toUpperCase()));
        const resultArr = searchName.map(movie =>
            <Movie key = { movie.id } movie = {movie} />
        )
        return resultArr;
    }

    render(){

        const {movies, searchMovieName, loadingFlag, loadingStars, loadingLikes, fields} = this.props;

        if(loadingFlag && loadingStars && loadingLikes && movies){
            return (
                <div className = 'container'>
                    <div className='row'>
                        <h1>loading</h1>
                    </div>
                </div>
            )
        }

        return (
            movies && <div className = 'container'>
                <div className='row'>
                    <div className="card card-movie col-12">
                        <div className="card card-movie">
                            <div className="card-header main-header ">
                                {fields['title']}
                            </div>
                        </div>
                        <Sorting/>
                        <Filter/>
                        <div className = 'movies-list col-12'>
                            {
                                this.setMovieList(movies, searchMovieName)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps ={
    dispatchData: getMovies
};

const mapSateToProps = (state) => ({
    movies: state.homePageReducer.movies,
    searchMovieName: state.homePageReducer.searchMovieName,
    loadingFlag: state.homePageReducer.loading,
    loadingLikes: state.homePageReducer.loadingLikes,
    loadingStars: state.homePageReducer.loadingStars
});

const withConnect = connect(
    mapSateToProps,
    mapDispatchToProps
);

export default withConnect(withTranslator(HomePage, "home-page"));

HomePage.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
    searchMovieName: PropTypes.string,
    loadingFlag: PropTypes.bool,
    loadingLikes: PropTypes.bool,
    loadingStars: PropTypes.bool,
    dispatchData: PropTypes.func.isRequired
}
