let pawn = new PieceInfo('pawn',['/images/Pawn.png'], 0, [new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])

let board
let whitePieces =Array()
let blackPieces = Array()
let possibleMoves = Array()
let pieceSelected = null
let whiteTurn = true
let currentEnemyPieces = blackPieces
let currentTeamPieces = whitePieces
let playerOneText = document.getElementById('PlayerOneText')
let playerTwoText = document.getElementById('PlayerTwoText')

function Main(){
    board = CreateBoard(3,3)
    Setup()
}

function ExclusiveMoveChecks (piece,tile) {
    if(tile.piece != null){
        tile.piece.DeletePiece()
    }
    
    CheckForEndOfMap(tile)
    CheckForNoMove(piece,tile)
}

function CheckForNoMove(piece, tile){
    tile.piece = piece
    piece.tile.piece = null
    piece.tile = tile

    let allPossibleMove=[]
    for(let i = 0; i < currentEnemyPieces.length; i++){
        allPossibleMove.push(...currentEnemyPieces[i].CalculatePossibleMoves(currentTeamPieces,false))
    }
    console.log(allPossibleMove)
    if(allPossibleMove.length <= 0){
        Win()
    }
}

function CheckForEndOfMap(tile){
    if(whiteTurn == true){
        if(IsInsideBoard(new Vector2(tile.pos.x,tile.pos.y-1)) == false){
            Win()
        }
    }
    else{
        if(IsInsideBoard(new Vector2(tile.pos.x,tile.pos.y+1)) == false){
            Win()
        }
    }
}

//calls Piece function to create all pieces
function SetupPieces(){
    //White Pieces
    for(let i = 0; i < 3; i++){
        whitePieces.push(new Piece(pawn, 0, board[i][2], document.createElement('img')))
    }

    //Black Pieces
    for(let i = 0; i < 3; i++){
        blackPieces.push(new Piece(pawn, 0, board[i][0], document.createElement('img')))
    }
    blackPieces.forEach(piece => {
        piece.element.style.filter = "brightness(60%)"
    })
}

function CheckMove(i, invalidMove, tempMoves, piece, enemyPieces, newPos, colorTiles){
    if(IsInsideBoard(newPos) && invalidMove == false){
            if(board[newPos.x][newPos.y].piece != null){
                if((enemyPieces.includes(board[newPos.x][newPos.y].piece) == false)){
                    return true
                }
                else if(piece.info.moves[i].type == 'Standard'||piece.info.moves[i].type == 'AttackOnly'){
                    if(colorTiles == true){
                        board[newPos.x][newPos.y].element.style.backgroundColor = 'red'
                    }
                    tempMoves.push(board[newPos.x][newPos.y])
                    return true
                }
            }
            else if (board[newPos.x][newPos.y].piece == null){
                if(piece.info.moves[i].type == 'Standard'|| piece.info.moves[i].type == 'MoveOnly'){
                    if(colorTiles == true){
                        board[newPos.x][newPos.y].element.style.backgroundColor = 'yellow'
                    }
                    tempMoves.push(board[newPos.x][newPos.y])
                }  
            }
        
    }
    else{
        return true
    }
    return false
}

Main()