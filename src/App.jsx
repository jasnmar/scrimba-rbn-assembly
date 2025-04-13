import './App.css'
import { useState } from 'react'
import Header from './sections/Header'
import Status from './sections/Status'
import Chips from './sections/Chips'
import Guess  from  './sections/Guess'
import Keyboard from './sections/Keyboard'



function App() {
const [currentWord, setCurrentWord] = useState("react")
const [guessedLetters, setGuessedLetters] = useState([])

console.log('guessedLetters: ', guessedLetters)


const letterArray = currentWord.split("")
const lettersObj = letterArray.map((letter) => {
  const guessed = guessedLetters.includes(letter)
  return {letter: letter, guessed: guessed}
})
console.log('lettersObj: ', lettersObj)

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
  //The letter being clicked is attached to some data attributes
  const currentLetter = e.target.dataset.letter
  //Check to make sure that the letter being pressed isn't already in the list of guessed letters
  //If it isn't in the list, add it
  //Since this is a state change it forces a re-render
  setGuessedLetters((prevGuesses) => {
    return prevGuesses.includes(currentLetter) ? prevGuesses : [...prevGuesses, currentLetter]
})
  }


  //Returns the App component jsx
  return (
    <>
      <Header />
      <main>
        <Status value="You Win" subvalue="Well done! 🎉" />
        <Chips />
        <Guess word={letterArray} content={lettersObj}/>
        <Keyboard content={allLettersObj} handler={keyboardClickHandler} />
        <button className="new-game">New Game</button>
      </main>
    </>
  )
}

export default App
