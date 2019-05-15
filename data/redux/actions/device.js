// action types

export const DEVICE_MOVIES = 'DEVICE_MOVIES';
export const DEVICE_CLEARED = 'DEVICE_CLEARED';
export const DEVICE_MOVIE_SELECTED = 'DEVICE_MOVIE_SELECTED';
export const DEVICE_WATCHED_MOVIES = 'DEVICE_WATCHED_MOVIES';

// action creators

export const deviceMovies = movies => ({
    type: DEVICE_MOVIES,
    movies
});

export const deviceSelectedMovie = selectedMovie => ({
    type: DEVICE_MOVIE_SELECTED,
    selectedMovie
});

export const deviceWatchedMovies = watchedMovies => ({
    type: DEVICE_WATCHED_MOVIES,
    watchedMovies
});

export const deviceCleared = () => ({
    type: DEVICE_CLEARED
});
