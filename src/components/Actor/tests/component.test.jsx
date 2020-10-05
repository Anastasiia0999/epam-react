import React from 'react';
import { mount, shallow } from 'enzyme';

import {Actor} from "../index";

describe('<Actor />', () =>{
    let wrapper;
    let instance;

    const props = {
        fields:{
            "actor-name": "Actor",
            "bio": "Biography"
        },
        openedActor:{
            "id": 37,
            "name": "Joseph Gordon-Levitt",
            "imgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzOTg0NTkzNF5BMl5BanBnXkFtZTcwNTQ4MTcwOQ@@._V1_UY317_CR35,0,214,317_AL_.jpg",
            "biography": "Lorem ipsum dolor sit amet"
        },
        loadingFlag: false,
        params: null
    };

    beforeEach(() => {
        wrapper = mount(<Actor {...props} />);
        instance = wrapper.instance();
    });

    it('should render correctly', () =>{
        expect(wrapper.html()).toMatchSnapshot();
    });


    it('correct author`s name render', () =>{
        expect(props.openedActor.name).toBe("Joseph Gordon-Levitt");
    });

    it('correct author`s photo link render', () =>{
        expect(props.openedActor.imgUrl).toBe("https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzOTg0NTkzNF5BMl5BanBnXkFtZTcwNTQ4MTcwOQ@@._V1_UY317_CR35,0,214,317_AL_.jpg");
    });

    it('correct author`s biography render', () =>{
        expect(props.openedActor.biography).toBe("Lorem ipsum dolor sit amet");
    });

});


