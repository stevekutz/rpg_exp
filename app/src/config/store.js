// initializes Redux Store
import {createStore, combineReducers} from 'redux';
import playerReducer from '../features/player/reducer'

// each component that needs STATE will have its own reducer
// ech reducer is JS obj with keys that define values of stored state 
const rootReducer = combineReducers({
    player: playerReducer,


})

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    
)