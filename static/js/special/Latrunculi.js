let pawn = new PieceInfo('Pawn',['/images/Pawn.png'], 0, [new Move([new Vector2(0,1)], 'MoveOnly', false, true, false),new Move([new Vector2(1,0)], 'MoveOnly', false, true, false), new Move([new Vector2(0,-1)], 'MoveOnly', false, true, false),new Move([new Vector2(-1,0)], 'MoveOnly', false, true, false)])
let dux = new PieceInfo('Dux',['/images/Dux.png', '/images/DuxVariation.png'], 0, [new Move([new Vector2(0,1)], 'MoveOnly', false, true, false),new Move([new Vector2(1,0)], 'MoveOnly', false, true, false), new Move([new Vector2(0,-1)], 'MoveOnly', false, true, false),new Move([new Vector2(-1,0)], 'MoveOnly', false, true, false)])

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
    board = CreateBoard(12,8)
    Setup()
}

function ExclusiveMoveChecks (piece,tile){
    CheckForCapture(piece,tile)
    CheckForCornerCapture(piece,tile)
    CheckPawns()
}


function SetupPieces(){
    //White Pieces
    for(let i = 0; i < board.length; i++){
        whitePieces.push(new Piece(pawn, 0, board[i][7], document.createElement('img')))
    }
    whitePieces.push(new Piece(dux, 0, board[board.length/2][6], document.createElement('img')))
    
    //Black Pieces
    for(let i = 0; i < board.length; i++){
        blackPieces.push(new Piece(pawn, 0, board[i][0], document.createElement('img')))
    }
    blackPieces.push(new Piece(dux, 1, board[board.length/2-1][1], document.createElement('img')))


    blackPieces.forEach(piece => {
        piece.element.style.filter = "brightness(60%)"
    })
}

function CheckPawns(){
    let victory = true
    if (whiteTurn == true){
        blackPieces.map(p => {
            if(p.info.name == pawn.name){
                victory = false
            }
        })
    }
    else{
        whitePieces.map(p => {
            if(p.info.name == pawn.name){
                victory = false
            }
        })
    }
    
    
    if (victory == true){
        Win()
    }
}

function CheckForCornerCapture(piece, tile){
    if(currentTeamPieces.includes(board[0][1].piece) == true && currentTeamPieces.includes(board[1][0].piece) == true && currentEnemyPieces.includes(board[0][0].piece) == true){
        console.log('1')
        if(board[0][0].piece.info == pawn){
            board[0][0].piece.DeletePiece()
        }
        else if(board[0][0].piece.info == dux){
            Win()
        }
    }
    
    if(currentTeamPieces.includes(board[0][board[0].length-2].piece) == true && currentTeamPieces.includes(board[1][board[0].length-1].piece) == true  && currentEnemyPieces.includes(board[0][board[0].length-1].piece) == true){
        console.log('2')
        if(board[0][board[0].length-1].piece.info == pawn){
            board[0][board[0].length-1].piece.DeletePiece()
        }
        else if(board[0][board[0].length-1].piece.info == dux){
            Win()
        }
    }

    if(currentTeamPieces.includes(board[board.length-1][1].piece) == true && currentTeamPieces.includes(board[board.length-2][0].piece) == true && currentEnemyPieces.includes(board[board.length-1][0].piece) == true){
        console.log('3')
        if(board[board.length-1][0].piece.info == pawn){
            board[board.length-1][0].piece.DeletePiece()
        }
        else if(board[board.length-1][0].piece.info == dux){
            Win()
        }
    }

    if(currentTeamPieces.includes(board[board.length-2][board[0].length-1].piece) == true && currentTeamPieces.includes(board[board.length-1][board[0].length-2].piece) == true && currentEnemyPieces.includes(board[board.length-1][board[0].length-1].piece) == true){
        console.log('4')
        if(board[board.length-1][board[0].length-1].piece.info == pawn){
            board[board.length-1][board[0].length-1].piece.DeletePiece()
        }
        else if(board[board.length-1][board[0].length-1].piece.info == dux){
            Win()
        }
    }
}

function CheckForCapture(piece, tile){
    if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+1)) && currentEnemyPieces.includes(board[tile.pos.x][tile.pos.y+1].piece) == true){
        if(board[tile.pos.x][tile.pos.y+1].piece.info == pawn){

            if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+2)) && currentTeamPieces.includes(board[tile.pos.x][tile.pos.y+2].piece) == true){

                board[tile.pos.x][tile.pos.y+1].piece.DeletePiece()
            }
        }
        else if(board[tile.pos.x][tile.pos.y+1].piece.info == dux){
            if((IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+2)) == false || board[tile.pos.x][tile.pos.y+2].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == false || board[tile.pos.x+1][tile.pos.y+1].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == false || board[tile.pos.x-1][tile.pos.y+1].piece != null)){

                Win()
            }
        }
    }
    if(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y)) && currentEnemyPieces.includes(board[tile.pos.x+1][tile.pos.y].piece) == true){
   
        if(board[tile.pos.x+1][tile.pos.y].piece.info == pawn){
       
            if(IsInsideBoard(new Vector2(tile.pos.x+2, tile.pos.y)) && currentTeamPieces.includes(board[tile.pos.x+2][tile.pos.y].piece) == true){
           
                board[tile.pos.x+1][tile.pos.y].piece.DeletePiece()
            }
        }
        else if(board[tile.pos.x+1][tile.pos.y].piece.info == dux){
            if((IsInsideBoard(new Vector2(tile.pos.x+2, tile.pos.y)) == false || board[tile.pos.x+2][tile.pos.y].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == false || board[tile.pos.x+1][tile.pos.y+1].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == false || board[tile.pos.x+1][tile.pos.y-1].piece != null)){

                Win()
            }
        }
    }
    if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y-1)) && currentEnemyPieces.includes(board[tile.pos.x][tile.pos.y-1].piece) == true){
   
        if(board[tile.pos.x][tile.pos.y-1].piece.info == pawn){
            if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y-2)) && currentTeamPieces.includes(board[tile.pos.x][tile.pos.y-2].piece) == true){
                board[tile.pos.x][tile.pos.y-1].piece.DeletePiece()
            }
        }
        else if(board[tile.pos.x][tile.pos.y-1].piece.info == dux){
            if((IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y-2)) == false || board[tile.pos.x][tile.pos.y-2].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == false || board[tile.pos.x+1][tile.pos.y-1].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == false || board[tile.pos.x-1][tile.pos.y-1].piece != null)){

                Win()
            }
        }
    }
    if(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y)) && currentEnemyPieces.includes(board[tile.pos.x-1][tile.pos.y].piece) == true){
   
        if(board[tile.pos.x-1][tile.pos.y].piece.info == pawn){
            if(IsInsideBoard(new Vector2(tile.pos.x-2, tile.pos.y)) && currentTeamPieces.includes(board[tile.pos.x-2][tile.pos.y].piece) == true){
           
                board[tile.pos.x-1][tile.pos.y].piece.DeletePiece()
            }
        }
        else if(board[tile.pos.x-1][tile.pos.y].piece.info == dux){
            if((IsInsideBoard(new Vector2(tile.pos.x-2, tile.pos.y)) == false || board[tile.pos.x-2][tile.pos.y].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == false || board[tile.pos.x-1][tile.pos.y+1].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == false || board[tile.pos.x-1][tile.pos.y-1].piece != null)){
                Win()
            }
        }
    }
}

function CheckMove(i, invalidMove, tempMoves, piece, enemyPieces, newPos, colorTiles){
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