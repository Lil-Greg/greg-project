interface MovieRating {
    Source: string;
    Value: string;
}

interface MovieSearchResultItem {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface MovieErrorResponse {
    Error: string,
    Response: "False" | "True"
}

export interface MovieSearchApiResponse {
    Search: MovieSearchResultItem[];
    totalResults: string;
    Response: string;
}


export default interface MovieApiResponse {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: MovieRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}
