import React, {Component} from 'react';
import Stars from "../Movie/Stars/Stars";
import './movie-box_style.css'

export class MovieBox extends Component{
    render = () => {
        const {movieData, handleClick} = this.props;
        return (
            <div className='card' >
                <div className = 'card-header bg-primary text-light' >
                    <h2>
                        {movieData.title}
                    </h2>
                </div>
                <div className='card-body'>
                    <div className='movie-box_info'>
                        <div className='col-6'>
                            <img src={movieData.posterUrl} className="rounded movie-box_image" alt="poster image"></img>
                        </div>
                        <div className = 'col-6 movie-details'>
                            <h6>
                                Director: {movieData.director}
                            </h6>
                            <h6>
                                Actors: {movieData.actors.join(', ')}
                            </h6>
                            <h6>
                                Genres: {movieData.genres.join(', ')}
                            </h6>
                            <hr/>
                            <h6 className='likes'>Likes {movieData.likes}</h6>
                            <hr/>
                            <Stars id = {movieData.id} stars={movieData.stars} handleClick={handleClick}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <p className='description' data-spy='scroll'>
                            <b>Description:</b> {movieData.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieBox;
