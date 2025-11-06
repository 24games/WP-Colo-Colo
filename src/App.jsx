import React from 'react'
import Header from './components/Header.jsx'
import Introduction from './components/Introduction.jsx'
import History from './components/History.jsx'
import Achievements from './components/Achievements.jsx'
import Rivalries from './components/Rivalries.jsx'
import Stadium from './components/Stadium.jsx'
import Players from './components/Players.jsx'
import Culture from './components/Culture.jsx'
import Future from './components/Future.jsx'
import Conclusion from './components/Conclusion.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Introduction />
      <History />
      <Achievements />
      <Rivalries />
      <Stadium />
      <Players />
      <Culture />
      <Future />
      <Conclusion />
      <Footer />
    </div>
  )
}

export default App

