// action types

export const DEVICE_MOVIES = 'DEVICE_MOVIES';
export const DEVICE_CLEARED = 'DEVICE_CLEARED';

// action creators

export const deviceMovies = movies => ({
    type: DEVICE_MOVIES,
    movies
});

export const deviceCleared = () => ({
    type: DEVICE_CLEARED
});
