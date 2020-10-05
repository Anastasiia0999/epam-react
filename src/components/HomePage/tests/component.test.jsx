import React from 'react';
import { mount } from 'enzyme';

import {HomePage} from "../index";

describe('<HomePage />', () =>{
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
        wrapper = mount(<HomePage {...props} />);
        instance = wrapper.instance();
    });

    it('should render correctly', () =>{
        expect(wrapper.html()).toMatchSnapshot();
    });


});


