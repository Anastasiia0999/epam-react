import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import './actor_style.css';

const Actor = ({actors,match}) =>{
    const openedActorId = Number(match.params.id);
    const openedActor = actors.find(movie => movie.id === openedActorId);

    return (
        <div className='container'>
            <div className="row">
                <div className='card card-box col-8' >
                    <div className = 'card-header movie-box_header my-3' >
                        <h2>
                            {openedActor.name}
                        </h2>
                    </div>
                    <div className='card-body actor-card'>
                        <div className='col-6'>
                            <img src={openedActor.imgUrl} className="rounded actor-box_image" alt="poster"/>
                        </div>
                        <div className='col-6'>
                            <p className='biography' data-spy='scroll'>
                                <b>Biography:</b> {openedActor.biography}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapSateToProps = (state) => ({
    actors: state.homePageReducer.actors
});

const withConnect = connect(
    mapSateToProps,
    null
);

export default withConnect(Actor);

Actor.propTypes ={
    actors: PropTypes.arrayOf(PropTypes.object).isRequired
}
