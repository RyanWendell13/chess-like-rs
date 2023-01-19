class Piece {
    // type, imageIndex, boardPos, element
    constructor(newInfo,newImageIndex, newTile, newElement){
        this.info = newInfo,
        this.tile = newTile,
        this.moved = false,
        this.element = newElement

        this.element.src = this.info.image[newImageIndex]
        this.element.alt= this.info.name
        this.element.id = 'Piece'
        this.element.style.position = 'absolute'
        this.element.style.bottom = this.info.yOffset +'px'
        this.element.style.zIndex = 10+this.tile.pos.y
        this.element.addEventListener('onClick',event => Clicked(event.target))
        this.tile.element.appendChild(this.element)
        this.tile.piece = this
        return this
    }

    //called from CalculatePossibleMoves
    RunDownMove (i, tempMoves, newPos, enemyPieces, colorTiles) {
        let invalidMove = false
        for(let j = 0; j < this.info.moves[i].iterators.length; j++){
            newPos = new Vector2(newPos.x+this.info.moves[i].iterators[j].x*GetTeamModifier(this),newPos.y+this.info.moves[i].iterators[j].y*GetTeamModifier(this))
            invalidMove = CheckMove(i, invalidMove, tempMoves, this, enemyPieces, newPos, colorTiles)
        }
        return [newPos,invalidMove]
    }


    //finds and dispalys all possible moves for a piece
    CalculatePossibleMoves (enemyPieces, colorTiles, runCheck) {
        let tempMoves = Array()
        for(let i = 0; i < this.info.moves.length; i++){
            let newPos = this.tile.pos
            if(this.info.moves[i].firstMove == false || this.moved == false){
                if(this.info.moves[i].isRepeating == true){
                    //repeating
                    let invalidMove = false
                    while( invalidMove == false){
                        let info = this.RunDownMove(i, tempMoves, newPos, enemyPieces, colorTiles, runCheck)
                        newPos = info[0]
                        invalidMove = info[1]
                    }
                }
                else{
                    let info = this.RunDownMove(i, tempMoves, newPos, enemyPieces, colorTiles, runCheck)
                    newPos = info[0]
                }
            }
        }
        return tempMoves
    }

    MovePiece (tile) {
        tile.element.appendChild(pieceSelected.element)
        DeletePossibleMoves()
    
        //run exclusive functions
        ExclusiveMoveChecks(this, tile)
    
        this.tile.piece = null
        this.tile = tile
        this.moved = true
        tile.piece = this
        pieceSelected = null
        this.element.style.zIndex = 10+tile.pos.y
    
        ChangeTurn()
    }

    DeletePiece(){
        this.element.parentNode.removeChild(this.element)
        this.tile.piece = null
        whitePieces = whitePieces.filter(p => p !== this )
        blackPieces = blackPieces.filter(p => p !== this )
        
    }
    
}

function FindAllPossibleMoves(pieces, opposingTeam){
    let allPossibleMoves = Array()
    for(let i = 0; i < pieces.length; i++){
        allPossibleMoves.push(...pieces[i].CalculatePossibleMoves(opposingTeam, false, false))
    }
    return allPossibleMoves
}