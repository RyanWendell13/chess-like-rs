function Setup(){
    SetupPieces()
    playerOneText.style.borderColor = 'black'
    document.getElementById('Restart').onclick = NewGame
    document.getElementById('NewGameButton').onclick = NewGame
}

//runs whenever a board element is clicked
function Clicked (element) {
    let obj = FindElement(element)
    let clickedTile
    //checks to see if clicked obj is a piece
    if(obj.pos == null){
        clickedTile = obj.tile
    }
    else{
        clickedTile = obj
    }
    if(clickedTile.piece != null){
        if(clickedTile.piece != pieceSelected ){
            if((whiteTurn == true && blackPieces.includes(clickedTile.piece) == false) || (whiteTurn == false && whitePieces.includes(clickedTile.piece) == false)){
                DeletePossibleMoves()
                pieceSelected = clickedTile.piece
                possibleMoves = pieceSelected.CalculatePossibleMoves(currentEnemyPieces, true, false)
            }
            else if (pieceSelected != null && possibleMoves.includes(clickedTile)){
                pieceSelected.MovePiece(clickedTile)
                pieceSelected = null
            }
        }
    }
    else if(pieceSelected != null && possibleMoves.includes(clickedTile)){
        pieceSelected.MovePiece(clickedTile)
    }
}

function FindElement (element) {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j].element == element){
                return board[i][j]
            }
        }
    }
    for(let i = 0; i < whitePieces.length; i++){
        if(whitePieces[i].element == element){
            return whitePieces[i]
        }
    }
    for(let i = 0; i < blackPieces.length; i++){
        if(blackPieces[i].element == element){
            return blackPieces[i]
        }
    }
    
}

//team modifier is needed to flip the movement of opposing pieces
function GetTeamModifier (piece) {
    let teamModifier = 1
    if(whitePieces.includes(piece) == true){
        teamModifier = -1
    }
    return teamModifier
}

function DeletePossibleMoves () {
    ResetBoardColor()
    possibleMoves.length = 0
}

function ChangeTurn () {
    console.log("changing turn")
    if(whiteTurn == false){
        whiteTurn = true
        playerOneText.style.borderColor = 'black'
        playerTwoText.style.borderColor = 'transparent'
        currentEnemyPieces = blackPieces
        currentTeamPieces = whitePieces
    }
    else{
        whiteTurn = false
        playerOneText.style.borderColor = 'transparent'
        playerTwoText.style.borderColor = 'black'
        currentEnemyPieces = whitePieces
        currentTeamPieces = blackPieces
    }
}



function Win () {
    let popup = document.getElementById('WinPopup')
    if(whiteTurn == true){
        document.getElementById('WinText').innerHTML = 'Player One Wins'
    }
    else{
        document.getElementById('WinText').innerHTML = 'Player Two Wins'
    }
    popup.style.visibility = 'visible'
}

function NewGame () {
    let len =  whitePieces.length
    for(let i = 0; i < len; i++){
        whitePieces[0].DeletePiece()
        
    }
    len = blackPieces.length
    for(let i = 0; i < len; i++){
        blackPieces[0].DeletePiece()
    }
    if(whiteTurn == false){
        ChangeTurn()
    }
    ResetBoardColor()
    SetupPieces()
    DeletePossibleMoves()
    currentEnemyPieces = blackPieces
    currentTeamPieces = whitePieces
    let popup = document.getElementById('WinPopup')
    popup.style.visibility = 'hidden'
}