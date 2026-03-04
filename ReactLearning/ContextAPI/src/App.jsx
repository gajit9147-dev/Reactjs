import './App.css'
import UserContextProvider from './context/userContextProvider'

function App() {
  return (
    < UserContextProvider>
      <h3 className="text-3xl font-bold underline">
        React context API Ajeet
      </h3>
    </UserContextProvider>
  )
}

export default App
