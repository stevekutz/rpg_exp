// manages Map comp state for tiles
// action is what we dispatch to reducer

const initialState = {
    tiles: [],

}

const mapReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TILES':
            return {                 // this is the payload we get back
                ...action.payload   // tile info
            }


        default: 
            return state
    }


};

export default mapReducer;