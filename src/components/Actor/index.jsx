import React, {Component} from 'react';
import {connect} from "react-redux";
import {getActorById} from "./redux/actions";
import PropTypes from "prop-types";
import './actor_style.css';
import withTranslator from "../../withTranslator";


class Actor extends Component {

    componentDidMount = () =>{
        this.props.dispatchData(Number(this.props.match.params.id));
    }

    render () {
        const {openedActor, loadingFlag, fields} = this.props;

        if(loadingFlag){
            return (
                <div className='container'>
                    <div className="row">
                        <h1>loading</h1>
                    </div>
                </div>
            )
        }

        return (
            <div className='container'>
                <div className="row">
                    <div className='card card-box col-8' >
                        <div className = 'card-header movie-box_header my-3' >
                            <h2>
                                {fields['actor-name']}: {openedActor.name}
                            </h2>
                        </div>
                        <div className='card-body actor-card'>
                            <div className='col-6'>
                                <img src={openedActor.imgUrl} className="rounded actor-box_image" alt="poster"/>
                            </div>
                            <div className='col-6'>
                                <p className='biography' data-spy='scroll'>
                                    <b>{fields['bio']}: </b> {openedActor.biography}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapSateToProps = (state) => ({
    openedActor: state.actorPageReducer.openedActor,
    loadingFlag: state.actorPageReducer.loading
});

const mapDispatchToProps ={
    dispatchData: getActorById
};

const withConnect = connect(
    mapSateToProps,
    mapDispatchToProps
);

export default withConnect(withTranslator(Actor, "actor"));

Actor.propTypes ={
    openedActor: PropTypes.object,
    loadingFlag: PropTypes.bool,
    dispatchData: PropTypes.func.isRequired
}
