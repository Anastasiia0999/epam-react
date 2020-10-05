import {sorting} from "../redux/helpFunctions";
import {editMovieFun} from "../../EditMovie/redux/helpFunctions";

describe('Sorting function', () =>{

    it('get sorted movies by stars using sorting()', () => {

        const movies =  [
            {
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
            },
            {
                "id": 2,
                "title": "The Godfather",
                "posterUrl": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
                "stars": 4,
                "likes": 15,
                "genres": [
                "Crime",
                "Drama"
            ],
                "actorsIds": [
                3,
                4,
                5
            ],
                "director": "фывфывыфв",
                "description": "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen"
            },
            {
                "id": 3,
                "title": "The Godfather II",
                "posterUrl": "https://images-na.ssl-images-amazon.com/images/I/71mgX2K40lL._AC_SL1500_.jpg",
                "stars": 4,
                "likes": 15,
                "genres": [
                "Crime",
                "Drama"
            ],
                "actorsIds": [
                4,
                6,
                7
            ],
                "director": "Francis Ford Coppola",
                "description": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red"
            }

        ];

        expect(sorting(movies, true, 'stars')).toStrictEqual(
            [
                  {
                    id: 3,
                    title: 'The Godfather II',
                    posterUrl: 'https://images-na.ssl-images-amazon.com/images/I/71mgX2K40lL._AC_SL1500_.jpg',
                    stars: 4,
                    likes: 15,
                    genres: [ 'Crime', 'Drama' ],
                    actorsIds: [ 4, 6, 7 ],
                    director: 'Francis Ford Coppola',
                    description: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red"
                  },
                  {
                    id: 2,
                    title: 'The Godfather',
                    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
                    stars: 4,
                    likes: 15,
                    genres: [ 'Crime', 'Drama' ],
                    actorsIds: [ 3, 4, 5 ],
                    director: 'фывфывыфв',
                    description: 'When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen'
                  },
                  {
                    id: 1,
                    title: 'The Shawshank Redemptoin',
                    posterUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/Movie_poster_the_shawshank_redemption.jpg/240px-Movie_poster_the_shawshank_redemption.jpg',
                    stars: 2,
                    likes: 22,
                    genres: [ 'Crime', 'Drama' ],
                    actorsIds: [ 0, 1, 2 ],
                    director: 'Frank Darabont',
                    description: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red."
                  }
            ]);
    });

    it('get sorted movies by likes using sorting()', () => {

        const movies =  [
            {
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
            },
            {
                "id": 2,
                "title": "The Godfather",
                "posterUrl": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
                "stars": 4,
                "likes": 15,
                "genres": [
                    "Crime",
                    "Drama"
                ],
                "actorsIds": [
                    3,
                    4,
                    5
                ],
                "director": "фывфывыфв",
                "description": "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen"
            },
            {
                "id": 3,
                "title": "The Godfather II",
                "posterUrl": "https://images-na.ssl-images-amazon.com/images/I/71mgX2K40lL._AC_SL1500_.jpg",
                "stars": 4,
                "likes": 15,
                "genres": [
                    "Crime",
                    "Drama"
                ],
                "actorsIds": [
                    4,
                    6,
                    7
                ],
                "director": "Francis Ford Coppola",
                "description": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red"
            }

        ];

        expect(sorting(movies, true, 'likes')).toStrictEqual(
            [
                {
                    id: 3,
                    title: 'The Godfather II',
                    posterUrl: 'https://images-na.ssl-images-amazon.com/images/I/71mgX2K40lL._AC_SL1500_.jpg',
                    stars: 4,
                    likes: 15,
                    genres: [ 'Crime', 'Drama' ],
                    actorsIds: [ 4, 6, 7 ],
                    director: 'Francis Ford Coppola',
                    description: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red"
                },
                {
                    id: 2,
                    title: 'The Godfather',
                    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
                    stars: 4,
                    likes: 15,
                    genres: [ 'Crime', 'Drama' ],
                    actorsIds: [ 3, 4, 5 ],
                    director: 'фывфывыфв',
                    description: 'When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen'
                },
                {
                    id: 1,
                    title: 'The Shawshank Redemptoin',
                    posterUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/Movie_poster_the_shawshank_redemption.jpg/240px-Movie_poster_the_shawshank_redemption.jpg',
                    stars: 2,
                    likes: 22,
                    genres: [ 'Crime', 'Drama' ],
                    actorsIds: [ 0, 1, 2 ],
                    director: 'Frank Darabont',
                    description: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red."
                }
            ]);
    });

});
