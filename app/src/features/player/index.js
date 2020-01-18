import React from 'react';
import {connect} from 'react-redux';
import walkSprite from './player_walk.png'

import handleMovement from './movement'

function Player(props){
    return (
        <div
            style = {{
               position: 'absolute',
               top: props.position[1],
               left: props.position[0],
               backgroundImage: `url('${walkSprite}')`,
               //backgroundPosition: '0 0',
               backgroundPositionY: '0px 0px',
               backgroundPosition: props.spriteLocation, 
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

// Player comp wrapped is inside handleMovement
// this catches window event listener for action-movement keys
// since this is a connected component, Player is connected to stor
export default connect(mapStateToProps)(handleMovement(Player))
