import { CLICK_OPEN_MENU } from "../actions/ActionTypes";

const initialState = {
    menuOpen: false
}

export const MenuOpenReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case CLICK_OPEN_MENU:
            return {
                ...state,
                menuOpen: !state.menuOpen
                }; 
        default:
            return state;
    }
};