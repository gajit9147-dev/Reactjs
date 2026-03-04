
import Card from './componant/card.jsx'
import React from 'react'
import TickTock from './componant/TickTock.jsx'

function App() {
  

return (
  <div className="page">
    <header className="page-header">
      <h1>Tic Tac Toe + Cards</h1>
      <p>Quick game with history, plus your card list.</p>
    </header>
    <section className="cards">
      <Card userName="Shiv bhukta" company="Some Company" age={30} />
      <Card />
      <Card />
    </section>
    <section className="game-wrapper">
      <TickTock />
    </section>
  </div>
)
}

export default App
