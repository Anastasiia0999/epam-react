import React from 'react';
import { mount, shallow } from 'enzyme';

import {MovieBox} from "../index";

describe('<MovieBox />', () =>{
    let wrapper;
    let instance;

    const props = {
        openedMovie:{
            "id": 1,
            "title": "The Shawshank Redemptoin",
            "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/Movie_poster_the_shawshank_redemption.jpg/240px-Movie_poster_the_shawshank_redemption.jpg",
            "stars": 2,
            "likes": 22,
            "genres": [
                "Crime",
                "Drama"
            ],
            "actorsIds": [
                1,
                2
            ],
            "director": "Frank Darabont",
            "description": "Chronicles the experiences of "
        },
        actors:[{
            "id": 1,
            "name": "Morgan Freeman",
            "imgUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_6750.jpg",
            "biography": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
            "id": 2,
            "name": "Bob Gunton",
            "imgUrl": "https://i.pinimg.com/736x/9a/69/1e/9a691e7471b7cff69a86262bbcbb2e4b--bob-gunton-epic-film.jpg",
            "biography": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        }],
        loadingMovie:false,
        loadingActors: false,
        fields:{
            "director": "Director",
            "actors": "Actors",
            "genres": "Genres",
            "description": "Description",
            "likes-name": "Likes",
            "edit-btn": "Edit",
            "delete-btn": "Delete"
        },
        deleteMovieDispatch: jest.fn(),
        getMovieDispatch:  jest.fn(),
        getActorsDispatch:  jest.fn()
    };

    beforeEach(() => {
        wrapper = shallow(<MovieBox {...props} />);
        instance = wrapper.instance();
    });

    it('should render correctly', () =>{
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('correct movie`s title render', () =>{
        expect(props.openedMovie.title).toBe("The Shawshank Redemptoin");
    });

    it('correct movie`s poster link render', () =>{
        expect(props.openedMovie.posterUrl).toBe("https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/Movie_poster_the_shawshank_redemption.jpg/240px-Movie_poster_the_shawshank_redemption.jpg");
    });

    it('correct director render', () =>{
        expect(props.openedMovie.director).toBe("Frank Darabont");
    });

    it('correct description render', () =>{
        expect(props.openedMovie.description).toBe("Chronicles the experiences of ");
    });

    it('correct likes number render', () =>{
        expect(props.openedMovie.likes).toBe("22");
    });

    it('correct stars number render', () =>{
        expect(props.openedMovie.likes).toBe("2");
    });


});


