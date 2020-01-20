import React from 'react';
import {SPRITE_SIZE} from '../../config/constants';
import {connect} from 'react-redux';
import './styles.css'

// set up so that sprite with case 5 & up CANNOT be walked through
function getTileSprite(type){
    switch(type) {
        case 0:
            return 'grass'
        case 3: 
            return 'tree'
        case 4:
            return 'chest'
        case 5:
            return 'rock'
        case 6:
            return 'tree'        
    }
}



function MapTile(props){
    return <div 
    

        //className = "tile"                                // NOTICE THIS !!!
        className = {`tile ${getTileSprite(props.tile)}`}  // use JS eval block to render specific sprite !!!
        style = {{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE
        }}
    />
}

function MapRow(props) {
    return ( 
        <div 
            className = "row"
            style = {{
                height: SPRITE_SIZE,
            }}
            >
            {
                props.tiles.map(tile => <MapTile tile = {tile} />)
            }    
        </div> 
    )

}


const Map = (props) => {
    return (
        <div
            style = {{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '800px',
                height: '400px',
                // backgroundColor: 'green',   // we will populate background with tiles for shapes(e.g. rock, tree)
                border: '4px solid white',
                boxSizing: "content-box"

                
            }}
        >  
            {
                props.tiles.map(row => <MapRow tiles = {row} /> )  

            }
        
        </div>
    )
}

function mapStateToProps(state){
    return {
        tiles: state.map.tiles,
    }
}

//export default Map;
export default connect(mapStateToProps)(Map);