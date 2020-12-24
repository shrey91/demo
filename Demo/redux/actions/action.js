

export const TOGGLE_MODE = "TOGGLE_MODE";
export const MAKE_CHANGES = "MAKE_CHANGES";


export const toggleLightMode = (mode) => async dispatch => {
    dispatch({type: TOGGLE_MODE, payload: mode});
}

export const makeChanges = () => async dispatch => {
    dispatch({type: MAKE_CHANGES});
}