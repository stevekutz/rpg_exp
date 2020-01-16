import React from 'react';
import Map from '../map';
import Player from '../player';

// since not imported as a default, we have to import func with { }
import {tiles} from '../../data/maps/1';


const World = () => {
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