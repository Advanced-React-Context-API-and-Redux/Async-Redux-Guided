import {GET_DATA, UPDATE_MISSIONS, SET_ERROR} from "../actions";



const initialState = {
    missions: [],
    isFetchingData: false,
    error: ''
}

// export const getData = () => {
//     return {
        
//     }
// }

export const missionReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true,
                missions: []
            };
        case UPDATE_MISSIONS:
            return {
                ...state,
                missions: action.payload,
                isFetchingData: false
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetchingData: false
            };
        default: return state;

    }

}

export default missionReducer;