// create HOF

import store from '../../config/store';
import {SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT} from '../../config/constants'

export default function handleMovement(player){
    // left 37
    // right 39
    // up 38
    // down 40

    function getNewPosition(oldPos, direction){

        console.log('oldPos[] ', oldPos[0]);
        console.log('oldPos[1]', oldPos[1])

        // ex. a step east counts as +40px to right, so we add SPRITE_SIZE to original oldPos[0]
        //    New position is [40,0]
        // Now a step west counts as -40px to left, so we subtract SPRITE_SIZE from oldPos[0]
        //    New position is [0,0]
        switch(direction){
            case 'WEST':
                return [ oldPos[0]-SPRITE_SIZE, oldPos[1] ]
            case 'EAST':
                return [ oldPos[0]+SPRITE_SIZE, oldPos[1] ]
            case 'NORTH':
                return [ oldPos[0], oldPos[1]-SPRITE_SIZE ]
            case 'SOUTH':
                return [ oldPos[0], oldPos[1]+SPRITE_SIZE ]        


        }
    }  
    
    // makes character face and walk in given direction
    // default facing SOUTH which is position [0,0] in playyer_walk.png

    function getSpriteLocation(direction, walkIndex){
        switch(direction){
            case 'SOUTH':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*0}px`  
            case 'EAST':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*1}px`
            case 'WEST':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*2}px`
            case 'NORTH':
                return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*3}px`

        }

    }    

    function getWalkIndex(){
        const walkIndex = store.getState().player.walkIndex
        return walkIndex >= 7 ? 0 : walkIndex + 1
    }
        
    function observeBoundaries(oldPos, newPos){
        // set up to return a predicate, e.g. return bool

        return  (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH-SPRITE_SIZE) &&
                (newPos[1] >=0 && newPos[1] <= MAP_HEIGHT-SPRITE_SIZE)
                // ? newPos
                // : oldPos

    }  

    function observeImpassable(oldPos, newPos){
        // see 41:51
        const tiles = store.getState().map.tiles
        const y = newPos[1] / SPRITE_SIZE 
        const x = newPos[0] / SPRITE_SIZE
        
        const nextTile = tiles[y][x]

        return nextTile < 5

    }


    function dispatchMove(direction, newPos){
        const walkIndex = getWalkIndex()
        
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos,
                // direction: direction,  // ES6 trick   same as just direction, 
                direction,  // returns string e.g. 'WEST'
                walkIndex,
                spriteLocation: getSpriteLocation(direction, walkIndex),
            }
        })
    }
    
    function attemptMove(direction) {
        const oldPos = store.getState().player.position
        const newPos = getNewPosition(oldPos, direction)
        
        if(observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos)){
            dispatchMove(direction, newPos)
        }

    }

    function handleKeyDown(e){
        e.preventDefault();

        switch(e.keyCode){
            case 37:
                return attemptMove('WEST')
            case 38:
                return attemptMove('NORTH')
                
            case 39:
                return attemptMove('EAST')
            case 40:
                return attemptMove('SOUTH')        
            
            default:
            console.log(e.keyCode)
        }
    }


    window.addEventListener('keydown', e => {
        handleKeyDown(e)
    })
    
    
    
    return player
}