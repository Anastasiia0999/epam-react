import React from 'react';
import { mount, shallow } from 'enzyme';

import {Stars} from "../index";


describe('<Stars />', () =>{
    let wrapper;
    let instance;

    const props = {
        movie:{
            "id": 1,
            "title": "test",
            "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/Movie_poster_the_shawshank_redemption.jpg/240px-Movie_poster_the_shawshank_redemption.jpg",
            "stars": 2,
            "likes": 22,
            "genres": [
                "Crime",
                "Drama"
            ],
            "actorsIds": [
                0,
                1,
                2
            ],
            "director": "Frank Darabont",
            "description": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red."
        },
        stars: 3,
        changeRatingDispatch: jest.fn(),
        putRatingDispatch: jest.fn()
    };

    beforeEach(() => {
        wrapper = shallow(<Stars {...props} />);
        instance = wrapper.instance();
    });

    it('should render correctly', () =>{
        expect(wrapper.html()).toMatchSnapshot();
    });


});


