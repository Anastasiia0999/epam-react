import React, {Component} from 'react';
import './info_style.css'

export class Info extends Component{
    render = () => {
        return (
            <div className='card movie-box_info bg-primary' >
                <div className = 'card-body' >
                    <h4>Click on Movie`s Title to see details</h4>
                </div>
            </div>
        )
    }
}

export default Info;
