import * as Actions from '../actions/action';
const initialState = {
    lightMode: true,
    profile: {
        name: "Shreyansh Shah",
        address: "Auckland CBD",
        postcode: "1010",
        phone: "=64212842309"
    }
    };
const mainReducer = (state = initialState, action) => {
    switch(action.type) {
    case Actions.TOGGLE_MODE:
        return {
            ...state,
            lightMode:action.payload
        };
    default:
        return state;}
}
export default mainReducer;