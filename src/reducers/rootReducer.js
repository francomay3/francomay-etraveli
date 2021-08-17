import {combineReducers} from 'redux';
import queryReducer from './queryReducer';
import sortbyReducer from './sortbyReducer';
import selectMovieReducer from './selectMovieReducer';

const rootreducer = combineReducers({
    query: queryReducer,
    sort: sortbyReducer,
    selectMovie: selectMovieReducer
})

export default rootreducer;