import React from 'react';
import { mount} from 'enzyme';

import {Filter} from "../index";

describe('<Filter />', () =>{
    let wrapper;
    let instance;

    const props = {
        fields:{
            "placeholder" : "Search by name"
        },
        filterByNameDispatch: jest.fn(),
        filer: jest.fn()
    };

    beforeEach(() => {
        wrapper = mount(<Filter {...props} />);
        instance = wrapper.instance();
    });

    it('should render correctly', () =>{
        expect(wrapper.html()).toMatchSnapshot();
    });


});


