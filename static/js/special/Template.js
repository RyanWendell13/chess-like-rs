let temp = new PieceInfo('temp',['/static/images/temp.png'], 0, [new Move([new Vector2(0,1)], 'MoveOnly', false, true, false)])

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
    board = CreateBoard(8,8)
    Setup()
}

function ExclusiveMoveChecks(piece,tile){

}

function SetupPieces(){
    //White Pieces
    whitePieces.push(new Piece(temp, 0, board[0][0], document.createElement('img')))
    
    //Black Pieces
    blackPieces.push(new Piece(temp, 0, board[0][0], document.createElement('img')))
    
    blackPieces.forEach(piece => {
        piece.element.style.filter = "brightness(60%)"
    })
}

function CheckMove(i,invalidMove,tempMoves,piece,enemyPieces,newPos,colorTiles){
    if(IsInsideBoard(newPos)){
        
    }
    else{
        return true
    }
    return false
}

Main()