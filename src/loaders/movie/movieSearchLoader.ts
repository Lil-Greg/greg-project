const API_KEY: string = import.meta.env.VITE_MOVIE_API_KEY;

const movieSearchLoader = async (searchTitle: string) => {
    console.log(searchTitle);
    const response = await fetch(`http://www.omdbapi.com/?s=${searchTitle}&apiKey=${API_KEY}`);


    console.log(response);
    if (response.ok === false) {
        throw Error(`Error with Movie search request; The response: ${JSON.stringify(response)}`);
    }

    return await response.json();
}

export default movieSearchLoader;
