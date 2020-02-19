import GET_DATA from "../actions";


const initialState = {
    missions: [],
    isFetchingData: false
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
                isfetchingData: true
            };
        default: return state;

    }

}

export default missionReducer;