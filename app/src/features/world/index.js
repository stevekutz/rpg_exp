import React from 'react';
import Map from '../map';
import Player from '../player';

// since not imported as a default, we have to import func with { }
import {tiles} from '../../data/maps/1';
import store from '../../config/store';

const World = () => {
    store.dispatch({
        type: 'ADD_TILES',       // ES6 trick !!!
        // payload: {tiles: tiles},  // same as payload: {tiles}   since key is same name as variable
        payload: {tiles},
    })


    return (
        <div
            style = {{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto'
            }}>
            <Map tiles = {tiles}/>
            <Player/>        
        </div>
    )
}

export default World;