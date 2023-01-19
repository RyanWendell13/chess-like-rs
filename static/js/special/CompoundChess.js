let pawn1 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let pawn2 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let pawn3 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let pawn4 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let pawn5 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let pawn6 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let pawn7 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let pawn8 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let rook1 = new PieceInfo('rook',['/static/images/Rook.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false), new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false)])
let rook2 = new PieceInfo('rook',['/static/images/Rook.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false), new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false)])
let knight1 = new PieceInfo('knight',['/static/images/Knight.png', '/static/images/KnightVariation.png'], 1, [new Move([new Vector2(1,2)], 'Standard', true, false, false),new Move([new Vector2(-1,2)], 'Standard', true, false, false),new Move([new Vector2(2,1)], 'Standard', true, false, false),new Move([new Vector2(2,-1)], 'Standard', true, false, false),new Move([new Vector2(1,-2)], 'Standard', true, false, false),new Move([new Vector2(-1,-2)], 'Standard', true, false, false),new Move([new Vector2(-2,1)], 'Standard', true, false, false),new Move([new Vector2(-2,-1)], 'Standard', true, false, false)])
let knight2 = new PieceInfo('knight',['/static/images/Knight.png', '/static/images/KnightVariation.png'], 1, [new Move([new Vector2(1,2)], 'Standard', true, false, false),new Move([new Vector2(-1,2)], 'Standard', true, false, false),new Move([new Vector2(2,1)], 'Standard', true, false, false),new Move([new Vector2(2,-1)], 'Standard', true, false, false),new Move([new Vector2(1,-2)], 'Standard', true, false, false),new Move([new Vector2(-1,-2)], 'Standard', true, false, false),new Move([new Vector2(-2,1)], 'Standard', true, false, false),new Move([new Vector2(-2,-1)], 'Standard', true, false, false)])
let bishop1 = new PieceInfo('bishop',['/static/images/Bishop.png'], 1, [new Move([new Vector2(1,1)], 'Standard', false, true, false),new Move([new Vector2(1,-1)], 'Standard', false, true, false), new Move([new Vector2(-1,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,1)], 'Standard', false, true, false)])
let bishop2 = new PieceInfo('bishop',['/static/images/Bishop.png'], 1, [new Move([new Vector2(1,1)], 'Standard', false, true, false),new Move([new Vector2(1,-1)], 'Standard', false, true, false), new Move([new Vector2(-1,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,1)], 'Standard', false, true, false)])
let queen = new PieceInfo('queen',['/static/images/Queen.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false),new Move([new Vector2(1,-1)], 'Standard', false, true, false),new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false),new Move([new Vector2(-1,1)], 'Standard', false, true, false)])
let king = new PieceInfo('king',['/static/images/King.png'], 1, [new Move([new Vector2(0,1)], 'Standard', false, false, false),new Move([new Vector2(1,1)], 'Standard', false, false, false),new Move([new Vector2(1,0)], 'Standard', false, false, false),new Move([new Vector2(1,-1)], 'Standard', false, false, false),new Move([new Vector2(0,-1)], 'Standard', false, false, false),new Move([new Vector2(-1,-1)], 'Standard', false, false, false),new Move([new Vector2(-1,0)], 'Standard', false, false, false),new Move([new Vector2(-1,1)], 'Standard', false, false, false)])

let bpawn1 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let bpawn2 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let bpawn3 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let bpawn4 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let bpawn5 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let bpawn6 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let bpawn7 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let bpawn8 = new PieceInfo('pawn',['/static/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let brook1 = new PieceInfo('rook',['/static/images/Rook.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false), new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false)])
let brook2 = new PieceInfo('rook',['/static/images/Rook.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false), new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false)])
let bknight1 = new PieceInfo('knight',['/static/images/Knight.png', '/static/images/KnightVariation.png'], 1, [new Move([new Vector2(1,2)], 'Standard', true, false, false),new Move([new Vector2(-1,2)], 'Standard', true, false, false),new Move([new Vector2(2,1)], 'Standard', true, false, false),new Move([new Vector2(2,-1)], 'Standard', true, false, false),new Move([new Vector2(1,-2)], 'Standard', true, false, false),new Move([new Vector2(-1,-2)], 'Standard', true, false, false),new Move([new Vector2(-2,1)], 'Standard', true, false, false),new Move([new Vector2(-2,-1)], 'Standard', true, false, false)])
let bknight2 = new PieceInfo('knight',['/static/images/Knight.png', '/static/images/KnightVariation.png'], 1, [new Move([new Vector2(1,2)], 'Standard', true, false, false),new Move([new Vector2(-1,2)], 'Standard', true, false, false),new Move([new Vector2(2,1)], 'Standard', true, false, false),new Move([new Vector2(2,-1)], 'Standard', true, false, false),new Move([new Vector2(1,-2)], 'Standard', true, false, false),new Move([new Vector2(-1,-2)], 'Standard', true, false, false),new Move([new Vector2(-2,1)], 'Standard', true, false, false),new Move([new Vector2(-2,-1)], 'Standard', true, false, false)])
let bbishop1 = new PieceInfo('bishop',['/static/images/Bishop.png'], 1, [new Move([new Vector2(1,1)], 'Standard', false, true, false),new Move([new Vector2(1,-1)], 'Standard', false, true, false), new Move([new Vector2(-1,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,1)], 'Standard', false, true, false)])
let bbishop2 = new PieceInfo('bishop',['/static/images/Bishop.png'], 1, [new Move([new Vector2(1,1)], 'Standard', false, true, false),new Move([new Vector2(1,-1)], 'Standard', false, true, false), new Move([new Vector2(-1,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,1)], 'Standard', false, true, false)])
let bqueen = new PieceInfo('queen',['/static/images/Queen.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false),new Move([new Vector2(1,-1)], 'Standard', false, true, false),new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false),new Move([new Vector2(-1,1)], 'Standard', false, true, false)])
let bking = new PieceInfo('king',['/static/images/King.png'], 1, [new Move([new Vector2(0,1)], 'Standard', false, false, false),new Move([new Vector2(1,1)], 'Standard', false, false, false),new Move([new Vector2(1,0)], 'Standard', false, false, false),new Move([new Vector2(1,-1)], 'Standard', false, false, false),new Move([new Vector2(0,-1)], 'Standard', false, false, false),new Move([new Vector2(-1,-1)], 'Standard', false, false, false),new Move([new Vector2(-1,0)], 'Standard', false, false, false),new Move([new Vector2(-1,1)], 'Standard', false, false, false)])

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
    board = CreateBoard(8,8)
    Setup()
}

function ExclusiveMoveChecks (piece,tile) {
    PawnCheck(piece, tile)
    PieceCaptureCheck(piece,tile)

    checkInfo = CheckForCheck(piece, currentTeamPieces, null, null)

    if(checkInfo[0] == true){
        DrawCheck(piece, checkInfo)
        CheckForCheckMate(currentEnemyPieces)
    }
}

function PieceCaptureCheck(piece,tile){
    if (tile.piece != null){
        tile.piece.info.moves.forEach(move => {
            piece.info.moves.push(move);
        });

        tile.piece.DeletePiece()
    }
}

function PawnCheck(piece, tile) {
    if (piece.info.name == 'pawn' ){
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

//calls new Piece function to create all pieces
function SetupPieces(){
    //White Pieces
    whitePieces.push(new Piece(pawn1, 0, board[0][6], document.createElement('img')))
    whitePieces.push(new Piece(pawn2, 0, board[1][6], document.createElement('img')))
    whitePieces.push(new Piece(pawn3, 0, board[2][6], document.createElement('img')))
    whitePieces.push(new Piece(pawn4, 0, board[3][6], document.createElement('img')))
    whitePieces.push(new Piece(pawn5, 0, board[4][6], document.createElement('img')))
    whitePieces.push(new Piece(pawn6, 0, board[5][6], document.createElement('img')))
    whitePieces.push(new Piece(pawn7, 0, board[6][6], document.createElement('img')))
    whitePieces.push(new Piece(pawn8, 0, board[7][6], document.createElement('img')))
    
    whitePieces.push(new Piece(rook1, 0, board[0][7], document.createElement('img')))
    whitePieces.push(new Piece(rook2, 0, board[7][7], document.createElement('img')))

    whitePieces.push(new Piece(knight1, 0, board[1][7], document.createElement('img')))
    whitePieces.push(new Piece(knight2, 0, board[6][7], document.createElement('img')))

    whitePieces.push(new Piece(bishop1, 0, board[2][7], document.createElement('img')))
    whitePieces.push(new Piece(bishop2, 0, board[5][7], document.createElement('img')))

    whitePieces.push(new Piece(queen, 0, board[3][7], document.createElement('img')))
    whitePieces.push(new Piece(king, 0, board[4][7], document.createElement('img')))
    
    //Black Pieces
    blackPieces.push(new Piece(bpawn1, 0, board[0][1], document.createElement('img')))
    blackPieces.push(new Piece(bpawn2, 0, board[1][1], document.createElement('img')))
    blackPieces.push(new Piece(bpawn3, 0, board[2][1], document.createElement('img')))
    blackPieces.push(new Piece(bpawn4, 0, board[3][1], document.createElement('img')))
    blackPieces.push(new Piece(bpawn5, 0, board[4][1], document.createElement('img')))
    blackPieces.push(new Piece(bpawn6, 0, board[5][1], document.createElement('img')))
    blackPieces.push(new Piece(bpawn7, 0, board[6][1], document.createElement('img')))
    blackPieces.push(new Piece(bpawn8, 0, board[7][1], document.createElement('img')))
    
    blackPieces.push(new Piece(brook1, 0, board[0][0], document.createElement('img')))
    blackPieces.push(new Piece(brook2, 0, board[7][0], document.createElement('img')))

    blackPieces.push(new Piece(bknight1, 1, board[1][0], document.createElement('img')))
    blackPieces.push(new Piece(bknight2, 1, board[6][0], document.createElement('img')))

    blackPieces.push(new Piece(bbishop1, 0, board[2][0], document.createElement('img')))
    blackPieces.push(new Piece(bbishop2, 0, board[5][0], document.createElement('img')))

    blackPieces.push(new Piece(bqueen, 0, board[3][0], document.createElement('img')))
    blackPieces.push(new Piece(bking, 0, board[4][0], document.createElement('img')))

    blackPieces.forEach(piece => {
        piece.element.style.filter = "brightness(60%)"
    })
}

//when a check is called this is run to see if any move is available
function CheckForCheckMate(enemyPieces){
    let allPossibleCheckedMoves = Array()
    for(let i = 0; i < enemyPieces.length; i++){
        allPossibleCheckedMoves.push(...CalculatePossibleMoves(enemyPieces[i], currentTeamPieces, false))
    }
    if(allPossibleCheckedMoves.length > 0){
        return false
    }
    else{
        Win()
    }
}

//draws the check path
function DrawCheck(piece, checkInfo){
    let newPos = piece.tile.pos
    board[newPos.x][newPos.y].element.style.backgroundColor = 'blue'
    if(piece.info.moves[checkInfo[1]].isRepeating == true){
        let invalidMove = false
        while(invalidMove == false){
            for(let i = 0; i < piece.info.moves[checkInfo[1]].iterators.length; i++){
                newPos = new Vector2(newPos.x+piece.info.moves[checkInfo[1]].iterators[i].x*GetTeamModifier(piece),newPos.y+piece.info.moves[checkInfo[1]].iterators[i].y*GetTeamModifier(piece))
                
                if(IsInsideBoard(newPos) == true && invalidMove == false){
                    board[newPos.x][newPos.y].element.style.backgroundColor = 'blue'
                    if(board[newPos.x][newPos.y].piece != null && board[newPos.x][newPos.y].piece.info == king){
                        invalidMove = true
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
        for(let i = 0; i < piece.info.moves[checkInfo[1]].iterators.length; i++){
            newPos = new Vector2(newPos.x+piece.info.moves[checkInfo[1]].iterators[i].x*GetTeamModifier(piece),newPos.y+piece.info.moves[checkInfo[1]].iterators[i].y*GetTeamModifier(piece))
            
            if(IsInsideBoard(newPos) == true && invalidMove == false){
                board[newPos.x][newPos.y].element.style.backgroundColor = 'blue'
                if(board[newPos.x][newPos.y].piece != null && board[newPos.x][newPos.y].piece.info == king){
                    invalidMove = true
                }
                
            }
            else{
                invalidMove = true
            }
        }
    }
}

//makes sure move won't check the king
function CheckForPossibleCheck(enemyPieces, currentTile, futureTile, moveIndex){
    for(let i = 0; i < enemyPieces.length; i++){
        if(futureTile != null && CanMoveTakeCheckingPiece(enemyPieces[i], currentTile.piece, futureTile, moveIndex) == false){
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

//used to check apporpriate movement with checks
function CheckForCheck (piece, pieceTeam, currentTile, futureTile) {
    for(let j = 0; j < piece.info.moves.length; j++){
        let newPos = piece.tile.pos
        if(piece.info.moves[j].firstMove == false || piece.moved == false){
            if(piece.info.moves[j].isRepeating == true){
                let invalidMove = false
                while (invalidMove == false){
                    //change j to k and i to j
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

function CheckMove(i, invalidMove, tempMoves, piece, enemyPieces, newPos, colorTiles){
    if(IsInsideBoard(newPos) && invalidMove == false){
        if(CheckForPossibleCheck(enemyPieces,piece.tile,board[newPos.x][newPos.y],i) == false){
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

Main()