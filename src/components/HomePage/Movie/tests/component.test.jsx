import React from 'react';
import { mount} from 'enzyme';

import {Movie} from "../index";

describe('<Movie />', () =>{
    let wrapper;
    let instance;

    const props = {
        movie:{
            "id": 2,
            "title": "The Godfather",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
            "stars": 4,
            "likes": 15,
            "genres": [
                "Crime",
                "Drama"
            ],
            "actorsIds": [
                3,
                4,
                5
            ],
            "director": "фывфывыфв",
            "description": "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen"
        },
        fields:{
            "likes-name": "Likes"
        },
        likeMovieDispatch: jest.fn(),
        dislikeMovieDispatch: jest.fn(),
    };

    beforeEach(() => {
        wrapper = mount(<Movie {...props} />);
        instance = wrapper.instance();
    });

    it('should render correctly', () =>{
        expect(wrapper.html()).toMatchSnapshot();
    });

});


