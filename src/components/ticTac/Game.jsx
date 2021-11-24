import React, {Component} from 'react';
import Board from "./Board";
import './style.css'
import exit from "exit";
function calculateWinnwe(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        ]

        for (let i = 0; i <lines.length; i++){
            const [a,b,c] = lines[i]
            console.log(squares[a]);
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }
        return null

}
class Game extends Component {
    state = {
        history: [{squares: Array(9).fill(null)}],
        stepNumber: 0,
        xIsNext: true
    }
    handleClick = i =>{
            const history = this.state.history.slice(0, this.state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
        if(calculateWinnwe(squares) || squares[i]){
            return;
        }
            squares[i] = this.state.xIsNext ? "X" : "O"
        this.setState({
            history: history.concat([{squares}]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        })
    }
    jumpTo = (step)=>{

        this.setState({
            stepNumber: step,
            xIsNext: step / 2 ===0
        })
    }
    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const winners = calculateWinnwe(current.squares)

        const move = history.map((_,move)=>{
            const desc = move ? 'Go to move: #' + move : 'Go to game start';
            return(
                <li key={move}>
                    <button onClick={()=>this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        let status = ""
        if(winners){
            status = "Winner " + winners;
        }else{
            status = 'Next Player #' + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div className="container">
                <h1 className="game_title">Tic Tac Game</h1>
                <Board onClick={this.handleClick} squares={current.squares}/>
                <div className="game_result">
                    <h4>{status}</h4>
                        <ol>
                            {move}
                        </ol>
                </div>
            </div>
        );
    }
}

export default Game;