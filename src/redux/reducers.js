import {combineReducers} from "redux";
import types from "./action-types";

function movies(state = [], action) {
    switch (action.type) {
        case types.SET_MOVIES: {
            return [...action.payload];
        }

        default:
            return state;
    }
}


function error(state = {}, action) {
    switch (action.type) {
        case types.SET_ERROR: {
            return {...action.payload};
        }
        default:
            return state;
    }
}

// The Movie Database connected data

function movieDatabaseMovies(state = [], action) {
    switch (action.type) {
        case types.MD_SET_MOVIES: {
            return [...action.payload];
        }

        default:
            return state;
    }
}

function movieDetails(state = {}, action) {
    switch (action.type) {
        case types.SET_MOVIE_DETAILS: {
            return {...action.payload};
        }

        default:
            return state;
    }
}

function currentPage(state = 1, action) {
    switch (action.type) {
        case types.SET_CURRENT_PAGE: {
            return action.payload;
        }
        default:
            return state;
    }
}

function totalPages(state = 0, action) {
    switch (action.type) {
        case types.SET_TOTAL_PAGES: {
            return action.payload;
        }
        default:
            return state;
    }
}


export default combineReducers({
    movies, 
    error, 
    movieDatabaseMovies, 
    movieDetails,
    currentPage,
    totalPages
});