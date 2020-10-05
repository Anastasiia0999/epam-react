import React from 'react';
import { mount, shallow } from 'enzyme';

import {ProtectedRoute} from "../index";


describe('<ProtectedRoute />', () =>{
    let wrapper;
    let instance;

    const props = {
        logStatus: false
    };

    beforeEach(() => {
        wrapper = shallow(<ProtectedRoute {...props} />);
        instance = wrapper.instance();
    });

    it('should render correctly', () =>{
        expect(wrapper.html()).toMatchSnapshot();
    });


});


