import React from 'react';
import { mount} from 'enzyme';

import {Header} from "../index";

describe('<Header />', () =>{
    let wrapper;
    let instance;

    const props = {
        fields:{
            "logIn-btn" : "Log In",
            "logOut-btn" : "Log Out"
        },
        logStatus: false,
        englishOn: true
    };

    beforeEach(() => {
        wrapper = mount(<Header {...props} />);
        instance = wrapper.instance();
    });

    it('should render correctly', () =>{
        expect(wrapper.html()).toMatchSnapshot();
    });

});


