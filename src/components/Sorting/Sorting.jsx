import React, {Component} from 'react';
import './sorting_style.css'

export class Sorting extends Component{
    render = () => {
        const {sortByLikesClick, sortByRatingClick, reset} = this.props;
        return (
            <>
                <div className="card col-12">
                    <div className="card-body sort-box">
                        <h4 className='text-primary'>Sort films by</h4>
                        <hr/>
                        <button type="button" className="btn btn-primary button-sort" onClick = {() => sortByLikesClick()}>likes</button>
                        <button type="button" className="btn btn-primary button-sort" onClick = {() => sortByRatingClick()}>rating</button>
                        <button type="button" className="btn btn-danger button-sort" onClick = {() => reset()}>reset</button>
                    </div>
                </div>

            </>
        )
    }
}

export default Sorting;
