let pawn = new PieceInfo('Pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1)], 'MoveOnly', false, true, false),new Move([new Vector2(1,0)], 'MoveOnly', false, true, false), new Move([new Vector2(0,-1)], 'MoveOnly', false, true, false),new Move([new Vector2(-1,0)], 'MoveOnly', false, true, false)])
let branán = new PieceInfo('Branán',['/static/images/Branán.png'], 0, [new Move([new Vector2(0,1)], 'MoveOnly', false, true, false),new Move([new Vector2(1,0)], 'MoveOnly', false, true, false), new Move([new Vector2(0,-1)], 'MoveOnly', false, true, false),new Move([new Vector2(-1,0)], 'MoveOnly', false, true, false)])

let board
let whitePieces =Array()
let blackPieces = Array()
let possibleMoves = Array()
let pieceSelected
let whiteTurn = true
let currentEnemyPieces = blackPieces
let currentTeamPieces = whitePieces
let playerOneText = document.getElementById('PlayerOneText')
let playerTwoText = document.getElementById('PlayerTwoText')

function Main(){
    board = CreateBoard(7,7)
    board[Math.trunc(board.length/2)][Math.trunc(board.length/2)].color = 'Red'
    board[Math.trunc(board.length/2)][Math.trunc(board.length/2)].element.style.backgroundColor = 'Red'
    Setup()
}

function ExclusiveMoveChecks (piece,tile) {
    if(piece.info == branán && (IsInsideBoard(new Vector2(tile.pos.x+1,tile.pos.y+1)) == false || IsInsideBoard(new Vector2(tile.pos.x-1,tile.pos.y-1)) == false)){
        Win()
    }
    CheckForCapture(piece,tile)
}

function SetupPieces(){
    //Defender Pieces
    blackPieces.push(new Piece(pawn, 0, board[Math.trunc(board.length/2)+1][Math.trunc(board[0].length/2)], document.createElement('img')))
    blackPieces.push(new Piece(pawn, 0, board[Math.trunc(board.length/2)][Math.trunc(board[0].length/2)+1], document.createElement('img')))
    blackPieces.push(new Piece(pawn, 0, board[Math.trunc(board.length/2)-1][Math.trunc(board[0].length/2)], document.createElement('img')))
    blackPieces.push(new Piece(pawn, 0, board[Math.trunc(board.length/2)][Math.trunc(board[0].length/2)-1], document.createElement('img')))
    blackPieces.push(new Piece(branán, 0, board[Math.trunc(board.length/2)][Math.trunc(board[0].length/2)], document.createElement('img')))
    
    //Attacker Pieces
    whitePieces.push(new Piece(pawn, 0, board[Math.trunc(board.length/2)][0], document.createElement('img')))
    whitePieces.push(new Piece(pawn, 0, board[Math.trunc(board.length/2)][1], document.createElement('img')))

    whitePieces.push(new Piece(pawn, 0, board[Math.trunc(board.length/2)][board[0].length-1], document.createElement('img')))
    whitePieces.push(new Piece(pawn, 0, board[Math.trunc(board.length/2)][board[0].length-2], document.createElement('img')))

    whitePieces.push(new Piece(pawn, 0, board[0][Math.trunc(board.length/2)], document.createElement('img')))
    whitePieces.push(new Piece(pawn, 0, board[1][Math.trunc(board.length/2)], document.createElement('img')))

    whitePieces.push(new Piece(pawn, 0, board[board[0].length-1][Math.trunc(board.length/2)], document.createElement('img')))
    whitePieces.push(new Piece(pawn, 0, board[board[0].length-2][Math.trunc(board.length/2)], document.createElement('img')))

    blackPieces.forEach(piece => {
        piece.element.style.filter = "brightness(60%)"
    })
}

function CheckForCapture(piece, tile){
    if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+1)) && currentEnemyPieces.includes(board[tile.pos.x][tile.pos.y+1].piece) == true){
        if(board[tile.pos.x][tile.pos.y+1].piece.info == pawn){
            if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+2))){
                if((currentTeamPieces.includes(board[tile.pos.x][tile.pos.y+2].piece) == true||(board[tile.pos.x][tile.pos.y+2].color == 'Red' && (board[tile.pos.x][tile.pos.y+2].piece == null)))){
                    board[tile.pos.x][tile.pos.y+1].piece.DeletePiece()
                }
            }
        }
        else if(board[tile.pos.x][tile.pos.y+1].piece.info == branán){ 
            if(board[tile.pos.x][tile.pos.y+1].color != 'Red'){
                if((IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+2)) == false || board[tile.pos.x][tile.pos.y+2].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == false || board[tile.pos.x-1][tile.pos.y+1].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == false || board[tile.pos.x+1][tile.pos.y+1].color != 'Red')){
                    if(currentTeamPieces.includes(board[tile.pos.x][tile.pos.y+2].piece) == true){
                        Win()
                    }
                }
                else{
                    let i = 0;
                    if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+2)) == true && currentTeamPieces.includes(board[tile.pos.x][tile.pos.y+2].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == true && currentTeamPieces.includes(board[tile.pos.x-1][tile.pos.y+1].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == true && currentTeamPieces.includes(board[tile.pos.x+1][tile.pos.y+1].piece) == true){
                        i++
                    }

                    if (i >= 2)  {
                        Win()
                    }
                }
            }
            else{
                if((IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+2)) == true && currentTeamPieces.includes(board[tile.pos.x][tile.pos.y+2].piece) == true)
                    && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == true && currentTeamPieces.includes(board[tile.pos.x-1][tile.pos.y+1].piece) == true)
                    && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == true && currentTeamPieces.includes(board[tile.pos.x+1][tile.pos.y+1].piece) == true)){
                        Win()
                }
            }
        }
    }
    if(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y)) && currentEnemyPieces.includes(board[tile.pos.x+1][tile.pos.y].piece) == true){
        if(board[tile.pos.x+1][tile.pos.y].piece.info == pawn){
            if(IsInsideBoard(new Vector2(tile.pos.x+2, tile.pos.y))){
                if((currentTeamPieces.includes(board[tile.pos.x+2][tile.pos.y].piece) == true||(board[tile.pos.x+2][tile.pos.y].color == 'Red' && board[tile.pos.x+2][tile.pos.y].piece == null))){
                    board[tile.pos.x+1][tile.pos.y].piece.DeletePiece()
                }
            }
        }
        else if(board[tile.pos.x+1][tile.pos.y].piece.info == branán){ 
            if(board[tile.pos.x+1][tile.pos.y].color != 'Red'){
                if((IsInsideBoard(new Vector2(tile.pos.x+2, tile.pos.y)) == false || board[tile.pos.x+2][tile.pos.y].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == false || board[tile.pos.x+1][tile.pos.y-1].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == false || board[tile.pos.x+1][tile.pos.y+1].color != 'Red')){
                    if(currentTeamPieces.includes(board[tile.pos.x+2][tile.pos.y].piece) == true){
                        Win()
                    }
                }
                else{
                    let i = 0;
                    if(IsInsideBoard(new Vector2(tile.pos.x+2, tile.pos.y)) == true && currentTeamPieces.includes(board[tile.pos.x+2][tile.pos.y].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == true && currentTeamPieces.includes(board[tile.pos.x+1][tile.pos.y-1].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == true && currentTeamPieces.includes(board[tile.pos.x+1][tile.pos.y+1].piece) == true){
                        i++
                    }

                    if (i >= 2)  {
                        Win()
                    }
                }
            }
            else{
                if((IsInsideBoard(new Vector2(tile.pos.x+2, tile.pos.y)) == true && currentTeamPieces.includes(board[tile.pos.x+2][tile.pos.y].piece) == true)
                    && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == true && currentTeamPieces.includes(board[tile.pos.x+1][tile.pos.y-1].piece) == true)
                    && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == true && currentTeamPieces.includes(board[tile.pos.x+1][tile.pos.y+1].piece) == true)){
                        Win()
                }
            }
        }
    }
    
    if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y-1)) && currentEnemyPieces.includes(board[tile.pos.x][tile.pos.y-1].piece) == true){
   
        if(board[tile.pos.x][tile.pos.y-1].piece.info == pawn){
            if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y-2))){
                if((currentTeamPieces.includes(board[tile.pos.x][tile.pos.y-2].piece) == true||(board[tile.pos.x][tile.pos.y-2].color == 'Red' && board[tile.pos.x][tile.pos.y-2].piece == null))){
                    board[tile.pos.x][tile.pos.y-1].piece.DeletePiece()
                }
            }
        }
        else if(board[tile.pos.x][tile.pos.y-1].piece.info == branán){ 
            if(board[tile.pos.x][tile.pos.y-1].color != 'Red'){
                if((IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y-2)) == false || board[tile.pos.x][tile.pos.y-2].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == false || board[tile.pos.x-1][tile.pos.y-1].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == false || board[tile.pos.x+1][tile.pos.y-1].color != 'Red')){
                    if(currentTeamPieces.includes(board[tile.pos.x][tile.pos.y-2].piece) == true){
                        Win()
                    }
                }
                else{
                    let i = 0;
                    if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y-2)) == true && currentTeamPieces.includes(board[tile.pos.x][tile.pos.y-2].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == true && currentTeamPieces.includes(board[tile.pos.x-1][tile.pos.y-1].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == true && currentTeamPieces.includes(board[tile.pos.x+1][tile.pos.y-1].piece) == true){
                        i++
                    }

                    if (i >= 2)  {
                        Win()
                    }
                }
            }
            else{
                if((IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y-2)) == true && currentTeamPieces.includes(board[tile.pos.x][tile.pos.y-2].piece) == true)
                    && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == true && currentTeamPieces.includes(board[tile.pos.x-1][tile.pos.y-1].piece) == true)
                    && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == true && currentTeamPieces.includes(board[tile.pos.x+1][tile.pos.y-1].piece) == true)){
                        Win()
                }
            }
        }
    }
    if(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y)) && currentEnemyPieces.includes(board[tile.pos.x-1][tile.pos.y].piece) == true){
   
        if(board[tile.pos.x-1][tile.pos.y].piece.info == pawn){
            if(IsInsideBoard(new Vector2(tile.pos.x-2, tile.pos.y))){
                if((currentTeamPieces.includes(board[tile.pos.x-2][tile.pos.y].piece) == true||(board[tile.pos.x-2][tile.pos.y].color == 'Red' && board[tile.pos.x-2][tile.pos.y].piece == null))){
                    board[tile.pos.x-1][tile.pos.y].piece.DeletePiece()
                }
            }
        }
        else if(board[tile.pos.x-1][tile.pos.y].piece.info == branán){ 
            if(board[tile.pos.x-1][tile.pos.y].color != 'Red'){
                if((IsInsideBoard(new Vector2(tile.pos.x-2, tile.pos.y)) == false || board[tile.pos.x-2][tile.pos.y].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == false || board[tile.pos.x-1][tile.pos.y-1].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == false || board[tile.pos.x-1][tile.pos.y+1].color != 'Red')){
                    if(currentTeamPieces.includes(board[tile.pos.x-2][tile.pos.y].piece) == true){
                        Win()
                    }
                }
                else{
                    let i = 0;
                    if(IsInsideBoard(new Vector2(tile.pos.x-2, tile.pos.y)) == true && currentTeamPieces.includes(board[tile.pos.x-2][tile.pos.y].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == true && currentTeamPieces.includes(board[tile.pos.x-1][tile.pos.y-1].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == true && currentTeamPieces.includes(board[tile.pos.x-1][tile.pos.y+1].piece) == true){
                        i++
                    }

                    if (i >= 2)  {
                        Win()
                    }
                }
            }
            else{
                if((IsInsideBoard(new Vector2(tile.pos.x-2, tile.pos.y)) == true && currentTeamPieces.includes(board[tile.pos.x-2][tile.pos.y].piece) == true)
                    && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == true && currentTeamPieces.includes(board[tile.pos.x-1][tile.pos.y-1].piece) == true)
                    && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == true && currentTeamPieces.includes(board[tile.pos.x-1][tile.pos.y+1].piece) == true)){
                        Win()
                }
            }
        }
    }
}

function CheckMove(i,invalidMove,tempMoves,piece,enemyPieces,newPos,colorTiles){
    if(IsInsideBoard(newPos) &&  board[newPos.x][newPos.y].color != "Red" && invalidMove == false){
        if(board[newPos.x][newPos.y].piece != null){
            return true
        }
        else {
            board[newPos.x][newPos.y].element.style.backgroundColor = 'yellow'
            tempMoves.push(board[newPos.x][newPos.y])        
        }
    
    }
    else{
        return true
    }
    return false
}

Main()