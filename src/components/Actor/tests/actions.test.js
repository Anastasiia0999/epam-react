
describe('Actor actions', () =>{

    it('get correct actor using getActorById()', () => {

        const getActorById = (id) => {
            fetch(`http://localhost:3001/actors/${id}`)
                .then(response => response.json())
                .then(result => {
                    expect(result.toBe({
                        "id": 5,
                        "name": "James Caan",
                        "imgUrl": "https://vignette.wikia.nocookie.net/simpsons/images/9/9a/James_caan.jpg/revision/latest?cb=20111204142822",
                        "biography": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                    }));
                })
        }

        getActorById(5);
    });

});
