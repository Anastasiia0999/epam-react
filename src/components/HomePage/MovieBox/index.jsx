import React from 'react';
import Stars from '../Stars'
import './movie-box_style.css'

const MovieBox = ({id, description, title, likes, posterUrl, stars, director, actors, genres}) =>{
        return (
            <div className='card card-box' >
                <div className = 'card-header movie-box_header' >
                    <h2>
                        {title}
                    </h2>
                </div>
                <div className='card-body'>
                    <div className='movie-box_info'>
                        <div className='col-6'>
                            <img src={posterUrl} className="rounded movie-box_image" alt="poster image"></img>
                        </div>
                        <div className = 'col-6 movie-details'>
                            <h6>
                                Director: {director}
                            </h6>
                            <h6>
                                Actors: {actors.join(', ')}
                            </h6>
                            <h6>
                                Genres: {genres.join(', ')}
                            </h6>
                            <hr/>
                            <h6 className='likes'>Likes {likes}</h6>
                            <hr/>
                            <Stars id = {id} stars={stars}/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <p className='description' data-spy='scroll'>
                            <b>Description:</b> {description}
                        </p>
                    </div>
                </div>
            </div>
        )
}

export default MovieBox;
