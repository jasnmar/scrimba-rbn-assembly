import './App.css'
import { useState } from 'react'
import Confetti from 'react-confetti'
import Header from './sections/Header'
import Status from './sections/Status'
import Chips from './sections/Chips'
import Guess  from  './sections/Guess'
import Keyboard from './sections/Keyboard'
import SrHelper from './components/SrHelper'
import { languages } from "./languages"
import { getFarewellText, getWord } from './utils'



function App() {

//State
//currentWord is the word being guessed
const [currentWord, setCurrentWord] = useState(() => getWord())
//GuessedLetters is an array of letters that have been guessed
const [guessedLetters, setGuessedLetters] = useState([])

//Derived
const letterArray = currentWord.split("")
const lettersObj = letterArray.map((letter) => {
  const guessed = guessedLetters.includes(letter)
  return {letter: letter, guessed: guessed}
})


const wrongGuessCount = guessedLetters.filter((letter) => {
  return !currentWord.includes(letter)
}).length

const numGuessesLeft = languages.length - wrongGuessCount - 1
const gameLost = wrongGuessCount >= languages.length - 1
const gameWon = currentWord.split("").every((letter) => {
  return guessedLetters.includes(letter)
})
const gameOver = gameLost || gameWon

const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
const lastLetterIncorrect = !currentWord.includes(lastGuessedLetter) && lastGuessedLetter !== undefined
const farewellText = (wrongGuessCount  > 0) && lastLetterIncorrect ? getFarewellText(languages[wrongGuessCount-1].name) : null

let statusElem = setStatus()
function setStatus() {
  if(gameWon) {
    return <Status value="You Win" status={"win"} subvalue="Well done! 🎉" />
  } else if(gameLost) {
    return <Status value="Game Over" status={"lose"} subvalue="You lose! Better start learning Assembly 😭" />
  } else {
    return <Status value={farewellText} status={"update"} subvalue="" />
  }
}

//Static
//Creates things that are passed to the keyboard, just
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const allLetters = alphabet.split("")
const allLettersObj = allLetters.map((letter) => {
  const isPressed = guessedLetters.includes(letter)
  const isCorrect = letterArray.includes(letter)
  return {letter: letter, pressed: isPressed, correct: isCorrect}
})

//Handles clicks to the keyboard portion of the page
function keyboardClickHandler(e) {
  e.preventDefault()
  if(gameOver) return
  //The)
  //The letter being clicked is attached to some data attributes
  const currentLetter = e.target.dataset.letter
  //Check to make sure that the letter being pressed isn't already in the list of guessed letters
  //If it isn't in the list, add it
  //Since this is a state change it forces a re-render
  setGuessedLetters((prevGuesses) => {
    const oldLetter = prevGuesses.includes(currentLetter)
    return oldLetter
      ? prevGuesses
      : [...prevGuesses, currentLetter]
      
  })
}

  function restartGame() {
    setCurrentWord(getWord())
    setGuessedLetters([])
  }


  //Returns the App component jsx
  return (
    <>
      <Header />
      <main>
        {gameWon && <Confetti />}
        {statusElem}
        <Chips languages={languages} missed={wrongGuessCount} />
        <Guess word={letterArray} lost={gameLost} content={lettersObj}/>
        <SrHelper currentWord={currentWord} numGuessesLeft={numGuessesLeft} guessedLetters={guessedLetters} lastGuessedLetter={lastGuessedLetter} />
        <Keyboard content={allLettersObj} disabled={gameOver} handler={keyboardClickHandler} />
        {gameOver &&  <button onClick={restartGame}className="new-game">New Game</button>}
      </main>
    </>
  )
}

export default App
