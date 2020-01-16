import React from 'react';

function MapTile(props){
    return <div> 0 </div>


}

function MapRow(props) {
    return props.tiles.map(tile => <MapTile value = {tile} />)

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