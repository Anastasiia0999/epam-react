import React from 'react';
import { mount} from 'enzyme';

import {Sorting} from "../index";

describe('<Sorting />', () =>{
    let wrapper;
    let instance;

    const props = {
        sortByLikesDispatch: jest.fn(),
        sortByRatingDispatch: jest.fn(),
        resetDispatch: jest.fn(),
        fields:{
            "sorting-title" : "Sort movies by",
            "likes-btn": "Likes",
            "stars-btn": "Rating",
            "reset-btn": "Reset"
        }
    };

    beforeEach(() => {
        wrapper = mount(<Sorting {...props} />);
        instance = wrapper.instance();
    });

    it('should render correctly', () =>{
        expect(wrapper.html()).toMatchSnapshot();
    });

});


