import {editMovieFun} from '../redux/helpFunctions'

describe('EditMovie function', () =>{

    it('get correct data editMovieFun()', () => {

        const movie =  {
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
                0,
                1,
                2
            ],
            "director": "Frank Darabont",
            "description": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red."
        };

        const changedFields = {
            'title': 'New Post'
        }

        expect(editMovieFun(movie, changedFields)).toStrictEqual({
            "id": 1,
            "title": "New Post",
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
        });
    });

});
