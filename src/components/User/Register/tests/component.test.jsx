import React from 'react';
import { mount } from 'enzyme';

import {Register} from "../index";

describe('<Register />', () =>{
    let wrapper;
    let instance;

    const props = {
        fields:{
            "alert-success": "Successful pass",
            "alert-error": "Invalid data",
            "logIn-name": "Login",
            "password-name": "Password",
            "logIn-placeholder": "Input login",
            "password-placeholder": "Input password",
            "muted-text": "We'll never share your login with anyone else",
            "check-box": "Check out",
            "logIn-btn": "Login",
            "help-text":"Don`t have an account?",
            "link-text":"Go to register page"
        },
        handleSubmit: jest.fn(),
        getUsersDispatch: jest.fn(),
        changeStatusDispatch: jest.fn(),
    }

    beforeEach(() => {
        wrapper = mount(<Register {...props} />);
        instance = wrapper.instance();
    });

    it('should render correctly', () =>{
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('checkbox change calls handleCheckout', () =>{

        const spy = jest.spyOn(wrapper.instance(), "handleCheckout");
        wrapper.instance().forceUpdate();
        wrapper.find("#exampleCheck1").simulate("change",  spy);

        expect(spy).toBeCalled();
    });

    /*it('form submit calls handleSubmit', () =>{

        const spy = jest.spyOn(wrapper.instance(), "handleSubmit");
        wrapper.instance().forceUpdate();
        wrapper.find("form").simulate("submit",  spy);

        expect(spy).toBeCalled();
    });*/


});


