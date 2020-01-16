// manages PLayer comp state
// action is what we dispatch to reducer

const initialState = {
    position: [0,0],

}

const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MOVE_PLAYER':
            return {                 // this is the payload we get back
                ...action.payload   // position: getNewPosition(direction)
            }


        default: 
            return state
    }


}

export default playerReducer;
