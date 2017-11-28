import {
    CHANGE_AUTH
} from '../actions/types';

export default function authenticationReducer(state = false, action) {
    switch ( action.type ) {
        case CHANGE_AUTH:
            return action.payload;
    }
    return state; 
}