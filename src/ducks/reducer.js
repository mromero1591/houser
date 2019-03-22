const initialState = {
    homes: [],
    house_name: '',
    street_line_one: '',
    city: '',
    state: '',
    zip_code: 0,
    mortgage: 0,
    rent: 0,
    img: ''
}

const ADD_HOME = 'ADD_HOME';
const REMOVE_HOME = 'REMOVE_HOME';
const UPDATE_HOUSE_NAME = 'UPDATE_HOUSE_NAME';
const UPDATE_STREET_LINE_ONE = "UPDATE_STREET_LINE_ONE";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP_CODE = "UPDATE_ZIP_CODE";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";
const UPDATE_IMG = "UPDATE_IMG";
const CLEAR_STATE = "CLEAR_STATE";

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_HOME:
            const newState = Object.assign({}, state);
            newState.homes.push(action.payload);
            return newState;
        case REMOVE_HOME:
            const oldHome = action.payload;
            const indexOfHome = state.homes.findIndex( home => {
                return home.house_name == oldHome.home_name;
            });
            return Object.assign({}, state, {homes: state.homes.splice(indexOfHome, 1)});
        case UPDATE_HOUSE_NAME:
            return Object.assign({}, state, {house_name: action.payload});
        case UPDATE_STREET_LINE_ONE:
            return Object.assign({}, state, {street_line_one: action.payload});
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload});
        case UPDATE_STATE:
            return Object.assign({}, state, {state: action.payload});
        case UPDATE_ZIP_CODE:
            return Object.assign({}, state, {zip_code: action.payload});
        case UPDATE_MORTGAGE:
            return Object.assign({}, state, {mortgage: action.payload});
        case UPDATE_RENT:
            return Object.assign({}, state, {rent: action.payload});
        case UPDATE_IMG:
            return Object.assign({}, state, {img: action.payload});
        case CLEAR_STATE:
            return Object.assign({}, initialState);
        default: 
            return state;
    }
}

export function addHome(home) {
    return {
        type: ADD_HOME,
        payload: home
    }
}

export function removeHome(home) {
    return {
        type: REMOVE_HOME,
        payload: home
    }
}

export function updateHouseName(houseName) {
    return {
        type: UPDATE_HOUSE_NAME,
        payload: houseName
    };
}

export function updateStreetLineOne(streetLineOne) {
    return {
        type: UPDATE_STREET_LINE_ONE,
        payload: streetLineOne
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZipCode(zipCode) {
    return {
        type: UPDATE_ZIP_CODE,
        payload: zipCode
    }
}

export function updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateRent(rent) {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

export function updateImg(img) {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}

export function clearState() {
    return {
        type: CLEAR_STATE
    }
}


export default reducer;