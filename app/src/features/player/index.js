import React from 'react';
import {connect} from 'react-redux';
import walkSprite from './player_walk.png'

import handleMovement from './movement'

export const Player = (props) => {
    return (
        <div
            style = {{
               position: 'absolute',
               top: props.position[1],
               left: props.position[0],
               backgroundImage: `url('${walkSprite}')`,
               backgroundPosition: '0 0',
               width: '40px',
               height: '40px',
            }}        
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player  // spread in ALL player properties
    }
}


// Player comp wrapped inside 
export default connect(mapStateToProps)(handleMovement(Player))
