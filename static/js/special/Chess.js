let pawn = new PieceInfo('pawn',['/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let rook = new PieceInfo('rook',['/images/Rook.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false), new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false)])
let knight = new PieceInfo('knight',['/images/Knight.png', '/images/KnightVariation.png'], 1, [new Move([new Vector2(1,2)], 'Standard', true, false, false),new Move([new Vector2(-1,2)], 'Standard', true, false, false),new Move([new Vector2(2,1)], 'Standard', true, false, false),new Move([new Vector2(2,-1)], 'Standard', true, false, false),new Move([new Vector2(1,-2)], 'Standard', true, false, false),new Move([new Vector2(-1,-2)], 'Standard', true, false, false),new Move([new Vector2(-2,1)], 'Standard', true, false, false),new Move([new Vector2(-2,-1)], 'Standard', true, false, false)])
let bishop = new PieceInfo('bishop',['/images/Bishop.png'], 1, [new Move([new Vector2(1,1)], 'Standard', false, true, false),new Move([new Vector2(1,-1)], 'Standard', false, true, false), new Move([new Vector2(-1,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,1)], 'Standard', false, true, false)])
let queen = new PieceInfo('queen',['/images/Queen.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false),new Move([new Vector2(1,-1)], 'Standard', false, true, false),new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false),new Move([new Vector2(-1,1)], 'Standard', false, true, false)])
let king = new PieceInfo('king',['/images/King.png'], 1, [new Move([new Vector2(0,1)], 'Standard', false, false, false),new Move([new Vector2(1,1)], 'Standard', false, false, false),new Move([new Vector2(1,0)], 'Standard', false, false, false),new Move([new Vector2(1,-1)], 'Standard', false, false, false),new Move([new Vector2(0,-1)], 'Standard', false, false, false),new Move([new Vector2(-1,-1)], 'Standard', false, false, false),new Move([new Vector2(-1,0)], 'Standard', false, false, false),new Move([new Vector2(-1,1)], 'Standard', false, false, false)])

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

let temp = true

function Main(){
    board = CreateBoard(8,8)
    Setup()
}

function ExclusiveMoveChecks (piece,tile) {
    if(tile.piece != null){
        tile.piece.DeletePiece()
    }
    PawnCheck(piece, tile)

    checkInfo = CheckForCheck(piece, currentTeamPieces, null, null)

    console.log(checkInfo)
    if(checkInfo[0] == true){
        DrawCheck(piece, checkInfo)
        CheckForCheckMate(currentEnemyPieces)
    }
}

function PawnCheck(piece, tile) {
    if (piece.info == pawn){
        if(whiteTurn == true && tile.pos.y == 0){
            piece.info = queen
            piece.element.src = piece.info.image
        }
        else if(tile.pos.y == 7){
            piece.info = queen
            piece.element.src = piece.info.image
        }
    }
}

//calls Piece function to create all pieces
function SetupPieces(){
    //White Pieces
    for(let i = 0; i < 8; i++){
        whitePieces.push(new Piece(pawn, 0, board[i][6], document.createElement('img')))
        
    }
    whitePieces.push(new Piece(rook, 0, board[0][7], document.createElement('img')))
    whitePieces.push(new Piece(rook, 0, board[7][7], document.createElement('img')))

    whitePieces.push(new Piece(knight, 0, board[1][7], document.createElement('img')))
    whitePieces.push(new Piece(knight, 0, board[6][7], document.createElement('img')))

    whitePieces.push(new Piece(bishop, 0, board[2][7], document.createElement('img')))
    whitePieces.push(new Piece(bishop, 0, board[5][7], document.createElement('img')))

    whitePieces.push(new Piece(queen, 0, board[3][7], document.createElement('img')))
    whitePieces.push(new Piece(king, 0, board[4][7], document.createElement('img')))
    
    //Black Pieces
    for(let i = 0; i < 8; i++){
        blackPieces.push(new Piece(pawn, 0, board[i][1], document.createElement('img')))
    }
    blackPieces.push(new Piece(rook, 0, board[0][0], document.createElement('img')))
    blackPieces.push(new Piece(rook, 0, board[7][0], document.createElement('img')))

    blackPieces.push(new Piece(knight, 1, board[1][0], document.createElement('img')))
    blackPieces.push(new Piece(knight, 1, board[6][0], document.createElement('img')))

    blackPieces.push(new Piece(bishop, 0, board[2][0], document.createElement('img')))
    blackPieces.push(new Piece(bishop, 0, board[5][0], document.createElement('img')))

    blackPieces.push(new Piece(queen, 0, board[3][0], document.createElement('img')))
    blackPieces.push(new Piece(king, 0, board[4][0], document.createElement('img')))

    blackPieces.forEach(piece => {
        piece.element.style.filter = "brightness(60%)"
    })
}

function CheckMove(i, invalidMove, tempMoves, piece, enemyPieces, newPos, colorTiles, runCheck){
    if(IsInsideBoard(newPos) && invalidMove == false){
        if(true){
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
    }
    else{
        return true
    }
    return false
}

//makes sure move won't check the king
function CheckForPossibleCheck(enemyPieces, currentTile, futureTile, moveIndex){
    let capturedPiece = futureTile.piece
    futureTile.piece = currentTile.piece
    for(let i = 0; i < enemyPieces.length; i++){
        if(futureTile != null){
            if(CheckForCheck(enemyPieces[i], enemyPieces, currentTile, futureTile)[0] == true){
                return true 
            }
        }
    }
    return false
}

function CanMoveTakeCheckingPiece(checkingPiece, attackPiece, futureTile, moveIndex){
    let newPos = attackPiece.tile.pos
    if(attackPiece.info.moves[moveIndex].firstMove == false || attackPiece.moved == false){
        if(attackPiece.info.moves[moveIndex].isRepeating == true){
            let invalidMove = false
            while (invalidMove == false){
                for(let i = 0; i < attackPiece.info.moves[moveIndex].iterators.length; i++){
                    newPos = new Vector2(newPos.x+attackPiece.info.moves[moveIndex].iterators[i].x*GetTeamModifier(attackPiece),newPos.y+attackPiece.info.moves[moveIndex].iterators[i].y*GetTeamModifier(attackPiece))
                    if(IsInsideBoard(newPos) == true && invalidMove == false){
                        if(board[newPos.x][newPos.y].piece != null){
                            if(board[newPos.x][newPos.y].piece == checkingPiece && futureTile == board[newPos.x][newPos.y]){
                                return true
                            }
                            else{
                                invalidMove = true
                            }
                        }
                    }
                    else{
                        invalidMove = true
                    }
                }
            }
        }
        else{
            let invalidMove = false
            for(let i = 0; i < attackPiece.info.moves[moveIndex].iterators.length; i++){
                newPos = new Vector2(newPos.x+attackPiece.info.moves[moveIndex].iterators[i].x*GetTeamModifier(attackPiece),newPos.y+attackPiece.info.moves[moveIndex].iterators[i].y*GetTeamModifier(attackPiece))
                if(IsInsideBoard(newPos) == true && invalidMove == false){
                    if(board[newPos.x][newPos.y].piece != null){
                        if(board[newPos.x][newPos.y].piece == checkingPiece && futureTile == board[newPos.x][newPos.y]){
                            return true
                        }
                        else{
                            invalidMove = true
                        }
                    }
                }
            }
        }
    }
    return false
}



// Check if the current player's king is in check: This can be done by 
// checking if any of the opponent's pieces can attack the king's current position.

// If the king is in check, check if the king has any legal moves: 
// This can be done by generating a list of all possible moves for the king, 
// and then checking if any of those moves would take the king out of check.

// Check if any of the player's pieces can block the check or capture the attacking 
// piece: This can be done by generating a list of all possible moves for the 
// player's pieces and checking if any of those moves would block the check or 
// capture the attacking piece.


function CheckCheck(piece, pieceTeam, enemyPieces){

}




//used to check apporpriate movement with checks
function CheckForCheck(piece, pieceTeam, currentTile, futureTile){
    for(let j = 0; j < piece.info.moves.length; j++){
        let newPos = piece.tile.pos
        if(piece.info.moves[j].firstMove == false || piece.moved == false){
            if(piece.info.moves[j].isRepeating == true){
                let invalidMove = false
                while (invalidMove == false){
                    for(let k = 0; k < piece.info.moves[j].iterators.length; k++){
                        newPos = new Vector2(newPos.x+piece.info.moves[j].iterators[k].x*GetTeamModifier(piece),newPos.y+piece.info.moves[j].iterators[k].y*GetTeamModifier(piece))
                        if(IsInsideBoard(newPos) == true && invalidMove == false){
                            if((board[newPos.x][newPos.y].piece != null && board[newPos.x][newPos.y] != currentTile)){
                                if(pieceTeam.includes(board[newPos.x][newPos.y].piece) == false && board[newPos.x][newPos.y].piece.info == king){
                                    if(piece.info.moves[j].type == 'Standard'|| piece.info.moves[j].type == 'AttackOnly'){
                                        return [true, j]
                                    }
                                }
                                else{
                                    invalidMove = true
                                }
                            }
                            else if(board[newPos.x][newPos.y] == futureTile){
                                if(currentTile.piece != null && currentTile.piece.info == king){
                                    if(piece.info.moves[j].type == 'Standard'|| piece.info.moves[j].type == 'AttackOnly'){
                                        return [true, j]
                                    }
                                }
                                else {
                                    invalidMove = true
                                }
                            }
                        }
                        else{
                            invalidMove = true
                        }
                    }
                }
            }
            else{
                let invalidMove = false
                for(let k = 0; k < piece.info.moves[j].iterators.length; k++){
                    newPos = new Vector2(newPos.x+piece.info.moves[j].iterators[k].x*GetTeamModifier(piece),newPos.y+piece.info.moves[j].iterators[k].y*GetTeamModifier(piece))
                    if(IsInsideBoard(newPos) == true && invalidMove == false){
                        if((board[newPos.x][newPos.y].piece != null && board[newPos.x][newPos.y] != currentTile)){
                            if(pieceTeam.includes(board[newPos.x][newPos.y].piece) == false && board[newPos.x][newPos.y].piece.info == king){
                                if(piece.info.moves[j].type == 'Standard'||piece.info.moves[j].type == 'AttackOnly'){
                                    return [true, j]
                                }
                            }
                            else{
                                invalidMove = true
                            }
                        }
                        else if(board[newPos.x][newPos.y] == futureTile){
                            if(currentTile.piece != null && currentTile.piece.info == king){
                                if(piece.info.moves[j].type == 'Standard'||piece.info.moves[j].type == 'AttackOnly'){
                                    return [true, j]
                                }
                            }
                            else {
                                invalidMove = true
                            }
                        }
                    }
                    else{
                        invalidMove = true
                    }
                }
            }
        }
    }
    return [false, 0]
}

Main()