import React from 'react';
import { mount, shallow } from 'enzyme';

import {EditMovie} from "../index";

describe('<EditMovie />', () =>{
    let wrapper;
    let instance;

    const props = {
        fields:{
            "title":"Edit movie",
            "title-label":"Name",
            "title-placeholder":"Change name",
            "poster-label":"Poster(url)",
            "poster-placeholder":"Change poster",
            "director-label":"Director",
            "director-placeholder":"Change director",
            "genres-label":"Genres",
            "genres-placeholder":"Change genres",
            "desc-label":"Description",
            "desc-placeholder":"Change description",
            "submit-btn":"Submit",
            "cancel-btn":"Cancel"
        },
        loadingFlag: false,
        params: null
    };

    beforeEach(() => {
        wrapper = mount(<EditMovie {...props} />);
        instance = wrapper.instance();
    });

    it('should render correctly', () =>{
        expect(wrapper.html()).toMatchSnapshot();
    });


});


