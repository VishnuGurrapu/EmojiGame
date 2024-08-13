// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, gameOver, playAgain} = props
  const playAgainBtn = () => {
    playAgain()
  }

  return score !== 12 ? (
    <div className="resultContainer">
      <div className="scoreContainer2">
        <h className="gameResult">You lose</h>
        <p className="scoreinwords">Score</p>
        <p className="score">{score}/12</p>
        <button onClick={playAgainBtn} className="btn">
          Play Again
        </button>
      </div>
      <div className="imgContainer">
        <img
          className="img"
          alt="win or lose"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        />
      </div>
    </div>
  ) : (
    <div className="resultContainer">
      <div className="scoreContainer2">
        <h className="gameResult">You Won</h>
        <p className="scoreinwords">Best Score</p>
        <p className="score">{score}/12</p>
        <button onClick={playAgainBtn} className="btn">
          Play Again
        </button>
      </div>
      <div className="imgContainer">
        <img
          className="img"
          alt="win or lose"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        />
      </div>
    </div>
  )
}
export default WinOrLoseCard
