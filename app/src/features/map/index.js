import React from 'react';


// set up so that sprite with case 5 & up CANNOT be walked through
function getTileSprite(type){
    switch(type) {
        case 0:
            return 'grass'

        case 5:
            return 'rock'
        case 6:
            return 'tree'        
    }
}



function MapTile(props){
    return <div className = "tile"> {props.tile} </div>


}

function MapRow(props) {
    return  <div className = "row">
    {
        props.tiles.map(tile => <MapTile tile = {tile} />)
    }    
            </div> 
    

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


                
            }}
        >  
            {
                props.tiles.map(row => <MapRow tiles = {row} /> )  
            }
        
        </div>
    )
}


export default Map;